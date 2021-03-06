import React, { Fragment, Component } from 'react'
import styles from './Apartment.module.css';
import Divider from '@material-ui/core/Divider';
import { style } from '@material-ui/system';
import Chip from '@material-ui/core/Chip';

function Apartment({ filters, apt }) {
    if (apt.mamad)
        filters = filters.filter(e => e.value!=='מקלט')
    if (apt.animals)
        filters = filters.filter(e => e.value!=='בעלי חיים')
    if (apt.kosher)
        filters = filters.filter(e => e.value!=='כשרות')
    if (apt.disabledAccess)
        filters = filters.filter(e => e.value!=='גישה לנכים')

    return (
        <Fragment >
            <Divider />

            <div className={styles.apartment}>
                <img
                    className={styles.img}
                    src={apt.photo} />

                <div className={styles.details}>
                    <div>
                        {apt.address.city +", "  + apt.address.street + " " + apt.address.apt}
                    </div>
                    <div>
                        {"מספר מתארחים: " + apt.maxPeople}
                    </div>
                    <div >
                        {"שם: " + apt.owner.name}
                    </div>
                    <div>
                        {"פלאפון: " + apt.owner.contactPhone}
                    </div>
                    <div>
                        <div className={styles.filters}>
                            {
                                filters.map(filter => <Chip style={{width:'90px'}} key={filter} variant="outlined" className={styles.chip} label={filter.label} />)
                            }
                        </div>


                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Apartment;