import { Box } from '@mui/material'
import React from 'react'
import Appbar from 'src/components/appbar'
import SearchForm from 'src/components/shared/searchForm'
import MainBanner from './MainBanner/mainBanner'
import OverView from './overView/overView'
import Footer from '../footer'

const PackageDetails = () => {
  return (
    <Box>
        <Appbar />
        <SearchForm />
        <MainBanner/>
        <OverView/>
        <Footer/>
    </Box>
  )
}

export default PackageDetails