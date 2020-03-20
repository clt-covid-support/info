import { Anchor, Box, Heading, Paragraph } from 'grommet';
import Page from '../components/Page';
import Section from '../components/Layout/Section';
import Map from '../components/Map'

export default () => (
  <Page pageTitle="data">
    <Box align="center" margin="large">
      <Heading>DATA</Heading>
      <Paragraph>
        github 👉{' '}
        <Anchor href="https://github.com/clt-covid-support/info">
          help hack covid out of clt!
        </Anchor>
      </Paragraph>
      <Section>
          <Map />
      </Section>
      <Paragraph>
        slack 👉{' '}
        <Anchor href="https://join.slack.com/t/charlottec-19/shared_invite/zt-crty0jqq-NUomRzdpuWo8CpRzDSsMag">
          join on slack!
        </Anchor>
      </Paragraph>
    </Box>
  </Page>
);
