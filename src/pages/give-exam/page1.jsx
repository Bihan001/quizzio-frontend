import { Typography, Button, Paper, Grid } from '@mui/material';

const Page1 = (props) => {
  const { handlePageNext = () => {} } = props;

  return (
    <>
      <Paper elevation={0} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '5rem' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia officia incidunt recusandae maxime facilis deleniti cum vel
        enim, quod sequi repellat porro quas molestiae quisquam dolores, voluptas in quos quo magnam et! Eaque corporis et aut quo officiis
        ullam eveniet, ipsa eius dolorum inventore velit beatae iusto fugit labore, excepturi similique deleniti ut quibusdam totam! Vitae
        quisquam numquam doloremque magni esse temporibus suscipit. Odit, odio quae consequuntur vero voluptas aperiam quaerat? Veniam natus
        molestias minima exercitationem, repellendus quam! Officia, nisi ad inventore a qui illum reprehenderit eligendi tempora fuga ea
        quasi quia quibusdam repudiandae neque dicta, voluptate dolorem ducimus?
      </Paper>
      <Button variant='contained' onClick={() => handlePageNext()}>
        Start
      </Button>
    </>
  );
};

export default Page1;
