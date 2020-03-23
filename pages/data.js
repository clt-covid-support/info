import { Anchor, Box, Heading, Paragraph } from 'grommet';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr'
import Page from '../components/Page';
import Section from '../components/Layout/Section';
import Map from '../components/Map'
import DataChart from '../components/DataChart'

export default () => {
    const { data, error } = useSWR(`${process.env.COVID_DATA_URL}/v2/latest`, fetch);
    const { data: country, error:_error } = useSWR(`${process.env.COVID_DATA_URL}/v2/locations?country_code=US`, fetch);

    console.log({data})
    console.log({country})
     
    return (
        <Page pageTitle="data">
          <Box align="center" margin="large">
            <Heading>DATA</Heading>
            <Heading level={2}>⚠️Work in Progress⚠️</Heading>
            <Paragraph>
              github 👉{' '}
              <Anchor href="https://github.com/clt-covid-support/info">
                help hack covid out of clt!
              </Anchor>
            </Paragraph>
            <Section>
                <Map />
            </Section>
            <Section name="World">
                <DataChart data={data}/>
            </Section>
            <Section name="United States">
                <DataChart data={country}/>
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
}
