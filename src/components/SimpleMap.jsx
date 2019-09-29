import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import marker from '../assets/images/images.png';
// import icon from '../../public/logo192.png';

const AnyReactComponent = ({ text }) => {
    return (
        <div>
            <span style={{ color: 'green' }}>{text}</span>
            <img src={marker} alt='map-icon' width='30' height='30' />
        </div>
    )
};
const TestingComponent = ({ text }) => <div><p style={{ color: 'red' }}>Testing component</p></div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 10.805,
            lng: 78.685277777778
        },
        zoom: 11
    };

    componentDidMount() {
        // console.log({ icon });
        console.log('process.env', process.env) // expected 'staging' to be printed here when running `npm run staging`
        console.log('process.env.NODE_ENV', process.env.NODE_ENV) // expected 'staging' to be printed here when running `npm run staging`
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col'>
                        <div style={{ height: '100vh', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: 'AIzaSyBrUW0Q1Wu9pwK2OdkD2kqMlwdUwbSe_eM' }}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}
                            >
                                <TestingComponent />
                                <AnyReactComponent
                                    lat={10.805}
                                    lng={78.685277777778}
                                    text="Trichy My City"
                                />
                                <TestingComponent />
                            </GoogleMapReact>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SimpleMap;