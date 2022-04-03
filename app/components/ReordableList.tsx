import { List, ListProps } from '@mui/material';
import { useCallback, useRef } from 'react';
import { ConnectDragSource, useDrag, useDrop, XYCoord } from 'react-dnd';
import update from 'immutability-helper';

interface ReordableListProps<ItemType> {
  items: Array<ItemType>;
  getId: (item: ItemType) => any;
  renderItem: (item: ItemType, drag: ConnectDragSource) => React.ReactElement;
  listProps?: ListProps;
  setItems: React.Dispatch<React.SetStateAction<any[]>>;
  dragEnabled?: boolean;
}

interface ReordableListItemProps {
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  id: any;
  index: number;
  renderItem: (drag: ConnectDragSource) => React.ReactElement;
  dragEnabled: boolean;
}

type DragItem = {
  id: any;
  index: number;
  type: string;
};

const ReordableListItem = ({
  moveItem,
  id,
  index,
  renderItem,
  dragEnabled,
}: ReordableListItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: any | null }
  >({
    accept: 'ListItem',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveItem(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'ListItem',
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: () => dragEnabled,
  });

  const opacity = isDragging ? 0.5 : 1;

  drop(preview(ref));

  return (
    <div style={{ opacity }} ref={ref} data-handler-id={handlerId}>
      {renderItem(drag)}
    </div>
  );
};

export default <ItemType,>({
  listProps,
  items,
  setItems,
  renderItem,
  getId,
  dragEnabled = true,
}: ReordableListProps<ItemType>) => {
  const moveItem = useCallback((dragIndex: number, hoverIndex: number) => {
    setItems((prevItems: any[]) =>
      update(prevItems, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevItems[dragIndex]],
        ],
      })
    );
  }, []);

  const curriedRenderItem = (item: any) => {
    return (drag: ConnectDragSource) => {
      return renderItem(item, drag);
    };
  };

  return (
    <List {...listProps}>
      {items.map((item, index) => {
        return (
          <ReordableListItem
            dragEnabled={dragEnabled}
            moveItem={moveItem}
            key={getId(item)}
            index={index}
            id={getId(item)}
            renderItem={curriedRenderItem(item)}
          />
        );
      })}
    </List>
  );
};
