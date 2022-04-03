import { Grid, Box } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Index() {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ height: '100%' }}>
      <span>Dashboard</span>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Doughnut data={data} />
        </Grid>
        <Grid item xs={4}>
          <div style={{ backgroundColor: '#CFCFCF' }}>1</div>
        </Grid>
        <Grid item xs={4}>
          <div style={{ backgroundColor: '#CFCFCF' }}>1</div>
        </Grid>
        <Grid item xs={8}>
          <div style={{ backgroundColor: '#CFCFCF' }}>1</div>
        </Grid>
      </Grid>
    </Box>
  );
}
