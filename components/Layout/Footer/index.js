import React from 'react';
import { Anchor, Box, Footer as GrommetFooter } from 'grommet';

import { Slack, Instagram, Github } from 'grommet-icons';

const Footer = () => (
  <GrommetFooter align="center" justify="center" background="light-4" pad="large">
    <Box direction="row" gap="small">
      <Anchor
        a11yTitle="Share feedback on Github"
        href="https://github.com/clt-covid-support/info"
        icon={<Github color="brand" size="large" />}
      />
      <Anchor
        a11yTitle="Chat with us on Slack"
        href="https://join.slack.com/t/charlottec-19/shared_invite/zt-crty0jqq-NUomRzdpuWo8CpRzDSsMag"
        icon={<Slack color="brand" size="large" />}
      />
      <Anchor
        a11yTitle="Follow us on Instagram"
        href="https://www.instagram.com/"
        icon={<Instagram color="brand" size="large" />}
      />
    </Box>
  </GrommetFooter>
);

export default Footer;
