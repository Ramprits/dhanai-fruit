import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  halfLg: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.breakpoints.values["lg"] / 2,
    },
  },
  firstBox: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: "auto",
      paddingRight: theme.spacing(6),
    },
  },
  secondBox: {
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(6),
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}));

export default function Contact(props) {
  const classes = useStyles();

  const content = {
    header: "Let's talk about the future",
    description:
      "We're here to answer your questions and discuss the decentralized future of the internet.",
    contact1: "Pied Piper HQ - 59 Silicon Av.",
    contact2: "555-333-555",
    contact3: "pay-the-piper@piedpiper.com",
    "primary-action": "Submit",
    ...props.content,
  };

  return (
    <section>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box py={10} display="flex" bgcolor="action.selected">
            <Box className={[classes.halfLg, classes.firstBox]}>
              <Container>
                <Typography variant="h4" component="h2" gutterBottom={true}>
                  {content["header"]}
                </Typography>
                <Typography variant="subtitle1" paragraph={true}>
                  {content["description"]}
                </Typography>

                <Box mt={4}>
                  <Box display="flex">
                    <RoomIcon className={classes.icon} />
                    <Typography variant="body1" paragraph={true}>
                      {content["contact1"]}
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <PhoneIcon className={classes.icon} />
                    <Typography variant="body1" paragraph={true}>
                      {content["contact2"]}
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <EmailIcon className={classes.icon} />
                    <Typography variant="body1" paragraph={true}>
                      {content["contact3"]}
                    </Typography>
                  </Box>
                </Box>
              </Container>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            py={10}
            display="flex"
            className={[classes.halfLg, classes.secondBox]}
          >
            <Container>
              <form noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="email"
                      id="email"
                      label="Email address"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      multiline
                      rows={5}
                      fullWidth
                      autoComplete="message"
                      name="message"
                      id="message"
                      label="Message"
                    />
                  </Grid>
                </Grid>
                <Box mt={2}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    {content["primary-action"]}
                  </Button>
                </Box>
              </form>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}
