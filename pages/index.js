import { Anchor, Box, Heading, Paragraph, Clock } from 'grommet';
import Page from '../components/Page';
import Section from '../components/Layout/Section'

export default () => (
  <Page pageTitle="home">
    <Box align="center" margin="large">
      <Heading>CLT COVID SUPPORT</Heading>
      <Paragraph>
        github 👉{' '}
        <Anchor href="https://github.com/clt-covid-support/info">
          help hack covid out of clt!
        </Anchor>
      </Paragraph>
      <Section>
          <Clock type="digital" />
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
