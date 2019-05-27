import React from 'react';
import { Link } from 'gatsby';
import Title from '../Globals/Title';

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
            <Title title="About"></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Health goth swag cray, leggings sustainable art party iPhone wolf lumbersexual kogi four dollar toast. Af polaroid chillwave, hot chicken glossier raw denim flexitarian. Palo santo 90's bitters ethical etsy la croix four dollar toast schlitz. Air plant etsy copper mug selvage, sustainable kinfolk flannel ethical keffiyeh iPhone hell of snackwave disrupt. Biodiesel DIY leggings, authentic ramps literally kickstarter sustainable lyft tattooed whatever sartorial wolf synth actually.
                        </p>
                        <Link to="/about/">
                            <button className="btn btn-outline-dark">Learn more</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
