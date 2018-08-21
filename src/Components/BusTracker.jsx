import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

import BusButton from './BusButton'
import './BusTracker.css';

const redTheme = createMuiTheme({
    palette: {
        primary: red,
    },
});

const greenTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#357a38',
        },
    },
});

const blueTheme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

const styles = theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.grey[100],
      },
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
        width: 900,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    heroContent: {
      maxWidth: 600,
      margin: '0 auto',
      padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    card: {
        minHeight: '420px',
    },
    cardHeader: {
      backgroundColor: theme.palette.grey[300],
    },
    cardActions: {
      [theme.breakpoints.up('sm')]: {
        paddingBottom: theme.spacing.unit * 2,
      },
    },
  });
  
  const tiers = [
    {
      title: 'Red',
      colour: 'red',
      theme: redTheme,
      cardHeaderClass: 'cardHeader redHeader',
      description: [
          'Control',
          'It\'s your job,\r\n Just do it!',
          'Doing it because I say so',
          'Culture change is your responsibility',
        ],
      buttonText: 'Red Bus',
      buttonVariant: 'outlined',
    },
    {
      title: 'Green',
      colour: 'green',
      theme: greenTheme,
      description: [
        'Compliance',
        'It\'s not my job!\r\n',
        'Doing it because I have to',
        'Culture change is not my responsibility',
      ],
      buttonText: 'Green Bus',
      buttonVariant: 'contained',
    },
    {
      title: 'Blue',
      colour: 'blue',
      theme: blueTheme,
      description: [
        'Discretionary Effort',
        'How can I help?\r\n Let\'s have a go!',
        'Doing it because I want to',
        'Culture change is everyone\'s responsibility',
      ],
      buttonText: 'Blue Bus',
      buttonVariant: 'outlined',
    },
  ];

class BusTracker extends Component {
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
                <main className={classes.layout}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
            Which bus are you driving today?
          </Typography>
          <Typography variant="title" align="center" color="textSecondary" component="p">
            {/* All submissions are completely anonymous and are only used to
            measure data over time. */}
          </Typography>
        </div>
{/* End hero unit */}
<Grid container spacing={40} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card className={classes.card}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    
                  </div>
                  {tier.description.map(line => (
                    <Typography variant="subheading" align="center" key={line}>
                    {line.split('\n').map((item, key) => {
  return <span key={key}>{item}<br/></span>
})}<br />
                    </Typography>
                  ))}
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <MuiThemeProvider theme={tier.theme}>
                        <BusButton busColour={tier.colour} onClick={() => this.saveBus(tier.colour)}>{tier.buttonText}</BusButton>
                    </MuiThemeProvider>
                </CardActions>
              </Card>
            </Grid>
          ))}
</Grid>
                </main>
            </React.Fragment>
        );
    }

    saveBus(busColour) {
          (async () => {
            const rawResponse = await fetch('', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({colour:busColour})
            });
            await rawResponse;
          })();
    }
}

BusTracker.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(BusTracker);
