import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import ListProducts from './ListProducts'
import ListBooks from './ListBooks'
import styled from 'styled-components'
const Items = styled.div`
  &.items-left {
    width: 75%;
  }
`
interface Props {
  seriesSet: React.Dispatch<React.SetStateAction<string>>
  publisherSet: React.Dispatch<React.SetStateAction<string>>
  chipSet: React.Dispatch<React.SetStateAction<boolean>>
  chip: boolean
}

const Mui: React.FC<Props> = ({ chipSet, chip }) => {
  const [value, setValue] = React.useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
    chipSet(!chip)
  }

  return (
    <Items>
      <Items className="items-left">
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Figures" value="1" />
                <Tab label="Sách" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <ListProducts />
            </TabPanel>
            <TabPanel value="2">
              <ListBooks />
            </TabPanel>
          </TabContext>
        </Box>
      </Items>
      <Items className="items-right"></Items>
    </Items>
  )
}
export default Mui
