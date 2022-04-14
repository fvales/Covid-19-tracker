import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import './InfoBox.css'

function InfoBox(props) {
    const { title, cases, total } = props
    return (
        <Card className="infoBox">
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>
                <h2 className='infoBox__cases'>{cases}</h2>
                <Typography className="infoBox__title" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox