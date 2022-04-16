import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { AppConst } from '../../constants'
import './InfoBox.css'

function InfoBox(props) {
    const { title, cases, total, caseType } = props
    return (
        <Card className="infoBox" onClick={() => props.setCaseType(caseType)}>
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>
                <h2 className='infoBox__cases'>{cases?.toLocaleString()}</h2>
                <Typography className="infoBox__title" color="textSecondary">
                    <span style={{ color: AppConst.getConfByCaseType[caseType].hex }}>{total?.toLocaleString()}</span> Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox