import React, { useEffect, useState } from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '../../../../state'
import { RootState } from '../../../../state/reducers'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Diversity1Outlined } from '@mui/icons-material'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const Description = () => {
  const [value, setValue] = useState(0)

  const dispatch = useDispatch()
  const { getNote } = bindActionCreators(actionCreators, dispatch)
  useEffect(() => {
    getNote()
  }, [])
  const { notes, loading } = useSelector((state: RootState) => state.note)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  if (loading) return <p>Loading</p>
  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Mô tả" {...a11yProps(0)} />
          <Tab label="Đánh giá" {...a11yProps(1)} />
          <Tab label=" Chi tiết vận chuyển" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Box sx={{ border: 1, borderColor: 'divider' }}>
        <TabPanel value={value} index={0}>
          <p className="h3">Chú ý khi sử dụng</p>
          <ol type="1">
            {notes?.represent.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ol>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          <>
            <p className="h3">Chính sách hoàn trả</p>
            <ul>
              {notes?.policy_return.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
            <p className="h3">Chuyển hàng</p>
            <ul>
              {notes?.shipping.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </>
        </TabPanel>
      </Box>
    </Box>
  )
}

export default Description
