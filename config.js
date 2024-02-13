var config = {
    style: 'mapbox://styles/grasssharm/clsi4sd5001ig01qs06kd0r9w',
    accessToken: 'pk.eyJ1IjoiZ3Jhc3NzaGFybSIsImEiOiJjbHMxN3RjcHowOGpnMmxta244bW96czJvIn0.9tX9xJZIHUN2InvWGfLrpQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Industrial Action in Suzhou, China',
    subtitle: 'Location of Strikes in relation to Industry Types',
    byline: 'Grace Tan | A0221161Y',
    
    footer: 'Source: China Labour Bulletin <a href="https://maps.clb.org.hk/?i18n_language=en_US&map=1&startDate=2018-01&endDate=2023-12&eventId=&keyword=&addressId=&parentAddressId=&address=&parentAddress=&industry=&parentIndustry=&industryName=">Mapbox Storytelling</a>.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Strikes and Protests in Suzhou',
            description: 'From 2018 to 2023, there were a total of 96 industrial actions, mainly involving low-tech industries such as construction and manufacturing. Interestingly, most strikes happen at the fringe of Suzhou Industrial Park (SIP) Boundary, which was planned together with Singapore in 1994.<a href="https://clb.org.hk/en/content/china-labour-bulletin-strike-map-data-analysis-2022-year-review-workers-rights"> <strong> Read more</strong></a>',
            location: {
                center: [120.69576,31.35232],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'strike_actions',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'strike_demand',
                    opacity: 0,
                    duration: 0              
                },
                {
                    layer: 'strike_industry',
                    opacity: 1,
                },
                {
                    layer: 'strike_heatmap',
                    opacity: 0,
                    duration:0               
                },
                {
                    layer: 'strike-2018',
                    opacity: 0,
                    duration:0               
                },
                {
                    layer: 'strike-2023',
                    opacity: 0,
                    duration:0               
                },
                {
                    layer: 'sip_boundary',
                    opacity: 1,
                },
                {
                    layer: 'primary-industry',
                    opacity: 0,
                    duration: 0              
                },
                {
                    layer: 'secondary-industry',
                    opacity: 0,
                    duration: 0              
                },
                {
                    layer: 'third-industry',
                    opacity: 0,
                    duration: 0              
                }
            ],
            onChapterExit: [
                {
                    layer: 'strike_actions',
                    opacity: 0
                },
                {
                    layer: 'strike_demand',
                    opacity: 0                
                },
                {
                    layer: 'strike_industry',
                    opacity: 1                
                },
                {
                    layer: 'strike_heatmap',
                    opacity: 0                
                },
                {
                    layer: 'strike-2018',
                    opacity: 0,
                },
                {
                    layer: 'strike-2023',
                    opacity: 0,
                },
                {
                    layer: 'sip_boundary',
                    opacity: 1                
                },
                {
                    layer: 'primary-industry',
                    opacity: 0                
                },
                {
                    layer: 'secondary-industry',
                    opacity: 0                
                },
                {
                    layer: 'third-industry',
                    opacity: 0                
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Comparison of Industry inside and Outside SIP',
            description: 'Within SIP, there is a higher concentration of Service and Knowledge based sectors (red), while there are more production centric industries (blue & green) at the fringe of the city which help support SIP’s needs.',
            location: {
                center: [120.69576,31.35232],
                zoom: 11,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'strike_actions',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'strike_demand',
                    opacity: 0,
                    duration: 5000              
                },
                {
                    layer: 'strike_industry',
                    opacity: 1,
                    duration: 100000                
                },
                {
                    layer: 'strike_heatmap',
                    opacity: 0,
                    duration: 5000              
                },
                {
                    layer: 'strike-2018',
                    opacity: 0,
                    duration:0               
                },
                {
                    layer: 'strike-2023',
                    opacity: 0,
                    duration:0               
                },
                {
                    layer: 'sip_boundary',
                    opacity: 1,
                    duration: 2000              
                },
                {
                    layer: 'primary-industry',
                    opacity: 1,
                    duration: 2000              
                },
                {
                    layer: 'secondary-industry',
                    opacity: 1,
                    duration: 3000              
                },
                {
                    layer: 'third-industry',
                    opacity: 1,
                    duration: 4000              
                }
            ],
            onChapterExit: [
                {
                    layer: 'strike_actions',
                    opacity: 0
                },
                {
                    layer: 'strike_demand',
                    opacity: 0                
                },
                {
                    layer: 'strike_industry',
                    opacity: 0                
                },
                {
                    layer: 'strike_heatmap',
                    opacity: 0                
                },
                {
                    layer: 'strike-2018',
                    opacity: 0,
                },
                {
                    layer: 'strike-2023',
                    opacity: 0,
                },
                {
                    layer: 'sip_boundary',
                    opacity: 0                
                },
                {
                    layer: 'primary-industry',
                    opacity: 0                
                },
                {
                    layer: 'secondary-industry',
                    opacity: 0                
                },
                {
                    layer: 'third-industry',
                    opacity: 0                
                }
            ],
        },
        {
            id: 'third-container',
            alignment: 'left',
            hidden: false,
            title: 'Strikes throughout the years: (2018-2019)',
            image: './image/strike.png',
            description: 'In year 2018-2019, the locations of strikes are scattered and are usually located in open spaces near the respective companies',
            location: {
                center: [120.58273, 31.30914],
                zoom: 12.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'strike_actions',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'strike_demand',
                    opacity: 0,
                    duration: 5000              
                },
                {
                    layer: 'strike_industry',
                    opacity: 0,
                    duration: 5000                
                },
                {
                    layer: 'strike_heatmap',
                    opacity: 0,
                    duration: 5000              
                },
                {
                    layer: 'strike-2018',
                    opacity: 1,
                    duration:2000               
                },
                {
                    layer: 'strike-2023',
                    opacity: 0,
                    duration:2000               
                },
                {
                    layer: 'sip_boundary',
                    opacity: 1,
                    duration: 3000              
                },
                {
                    layer: 'primary-industry',
                    opacity: 0,
                    duration: 5000              
                },
                {
                    layer: 'secondary-industry',
                    opacity: 0,
                    duration: 5000              
                },
                {
                    layer: 'third-industry',
                    opacity: 0,
                    duration: 5000              
                }
            ],
            onChapterExit: [
                {
                    layer: 'strike_actions',
                    opacity: 0
                },
                {
                    layer: 'strike_demand',
                    opacity: 0                
                },
                {
                    layer: 'strike_industry',
                    opacity: 0                
                },
                {
                    layer: 'strike_heatmap',
                    opacity: 0                
                },
                {
                    layer: 'strike-2018',
                    opacity: 0,
                },
                {
                    layer: 'strike-2023',
                    opacity: 0
                },
                {
                    layer: 'sip_boundary',
                    opacity: 1                
                },
                {
                    layer: 'primary-industry',
                    opacity: 0                
                },
                {
                    layer: 'secondary-industry',
                    opacity: 0                
                },
                {
                    layer: 'third-industry',
                    opacity: 0                
                }
            ]
        },
        {
            id: '2third-container',
            alignment: 'left',
            hidden: false,
            title: 'Strikes throughout the years: (2022-2023)',
            image: './image/strike20233.png',
            description: 'However in 2022-2023, strikes only occurred in specific areas, most concentrated at the government administration office of Suzhou. This could be due to government policies with goals of containing strikes and protests in Suzhou',
            location: {
                center: [120.58273, 31.30914],
                zoom: 12.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'strike_actions',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'strike_demand',
                    opacity: 0,
                    duration: 5000              
                },
                {
                    layer: 'strike_industry',
                    opacity: 0,
                    duration: 5000                
                },
                {
                    layer: 'strike_heatmap',
                    opacity: 0,
                    duration: 5000              
                },
                {
                    layer: 'strike-2018',
                    opacity: 0,
                    duration:2000               
                },
                {
                    layer: 'strike-2023',
                    opacity: 1,
                    duration:0               
                },
                {
                    layer: 'sip_boundary',
                    opacity: 1,
                    duration: 3000              
                },
                {
                    layer: 'primary-industry',
                    opacity: 0,
                    duration: 5000              
                },
                {
                    layer: 'secondary-industry',
                    opacity: 0,
                    duration: 5000              
                },
                {
                    layer: 'third-industry',
                    opacity: 0,
                    duration: 5000              
                }
            ],
            onChapterExit: [
                {
                    layer: 'strike_actions',
                    opacity: 0
                },
                {
                    layer: 'strike_demand',
                    opacity: 0                
                },
                {
                    layer: 'strike_industry',
                    opacity: 0                
                },
                {
                    layer: 'strike_heatmap',
                    opacity: 0                
                },
                {
                    layer: 'strike-2018',
                    opacity: 0,
                },
                {
                    layer: 'strike-2023',
                    opacity: 0,
                },
                {
                    layer: 'sip_boundary',
                    opacity: 0                
                },
                {
                    layer: 'primary-industry',
                    opacity: 0                
                },
                {
                    layer: 'secondary-industry',
                    opacity: 0                
                },
                {
                    layer: 'third-industry',
                    opacity: 0                
                }
            ]
        },
        {
            id: 'fourth-container',
            alignment: 'left',
            hidden: false,
            title: 'Demands from Workers',
            image:'./image/strike3.jpg',
            description: 'We can see that the majority of the strikes occur due to Wage Arrears (74 actions), while others were due to a lack of compensation, relocation, closure and even poor working conditions. This underscores the importance of either enhancing skills within the workforce or providing greater support to blue-collar workers to foster a more cohesive industry.',
            location: {
                center: [120.61266, 31.30148],
                zoom: 12,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'strike_actions',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'strike_demand',
                    opacity: 1,
                    duration: 3000              
                },
                {
                    layer: 'strike_industry',
                    opacity: 1,
                    duration: 5000                
                },
                {
                    layer: 'strike_heatmap',
                    opacity: 0,
                    duration: 5000              
                },
                {
                    layer: 'strike-2018',
                    opacity: 0,
                    duration:0               
                },
                {
                    layer: 'strike-2023',
                    opacity: 0,
                    duration:0               
                },
                {
                    layer: 'sip_boundary',
                    opacity: 1,
                    duration: 5000              
                },
                {
                    layer: 'primary-industry',
                    opacity: 0,
                    duration: 5000              
                },
                {
                    layer: 'secondary-industry',
                    opacity: 0,
                    duration: 5000              
                },
                {
                    layer: 'third-industry',
                    opacity: 0,
                    duration: 5000              
                }
            ],
            onChapterExit: [
                {
                    layer: 'strike_actions',
                    opacity: 0
                },
                {
                    layer: 'strike_demand',
                    opacity: 0                
                },
                {
                    layer: 'strike_industry',
                    opacity: 1                
                },
                {
                    layer: 'strike_heatmap',
                    opacity: 0                
                },
                {
                    layer: 'strike-2018',
                    opacity: 0,
                },
                {
                    layer: 'strike-2023',
                    opacity: 0,
                },
                {
                    layer: 'strike-2018',
                    opacity: 0,
                    duration:0               
                },
                {
                    layer: 'strike-2023',
                    opacity: 0,
                    duration:0               
                },
                {
                    layer: 'sip_boundary',
                    opacity: 1                
                },
                {
                    layer: 'primary-industry',
                    opacity: 0                
                },
                {
                    layer: 'secondary-industry',
                    opacity: 0                
                },
                {
                    layer: 'third-industry',
                    opacity: 0                
                }
            ]
        },
        {
            id: 'fifth-container',
            alignment: 'left',
            hidden: false,
            title: 'Actions taken Workers',
            image: './image/strike5.jpeg',
            description: 'We can see that the government and management has tried to intervene by resolving industrial actions through negotiations. Nevertheless, in protests with larger numbers of participants, police intervention became necessary, often in response to instances of violence.',
            location: {
                center: [120.61266, 31.30148],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'strike_actions',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'strike_demand',
                    opacity: 0,
                    duration: 0              
                },
                {
                    layer: 'strike_industry',
                    opacity: 1,
                    duration: 5000                
                },
                {
                    layer: 'strike_heatmap',
                    opacity: 0,
                    duration: 5000              
                },
                {
                    layer: 'strike-2018',
                    opacity: 0,
                    duration:0               
                },
                {
                    layer: 'strike-2023',
                    opacity: 0,
                    duration:0               
                },
                {
                    layer: 'sip_boundary',
                    opacity: 1,
                    duration: 3000              
                },
                {
                    layer: 'primary-industry',
                    opacity: 0,
                    duration: 5000              
                },
                {
                    layer: 'secondary-industry',
                    opacity: 0,
                    duration: 5000              
                },
                {
                    layer: 'third-industry',
                    opacity: 0,
                    duration: 5000              
                }
            ],
            onChapterExit: [
                {
                    layer: 'strike_actions',
                    opacity: 0
                },
                {
                    layer: 'strike_demand',
                    opacity: 0                
                },
                {
                    layer: 'strike_industry',
                    opacity: 1                
                },
                {
                    layer: 'strike_heatmap',
                    opacity: 0                
                },
                {
                    layer: 'strike-2018',
                    opacity: 0,
                },
                {
                    layer: 'strike-2023',
                    opacity: 0,
                },
                {
                    layer: 'sip_boundary',
                    opacity: 1                
                },
                {
                    layer: 'primary-industry',
                    opacity: 0                
                },
                {
                    layer: 'secondary-industry',
                    opacity: 0                
                },
                {
                    layer: 'third-industry',
                    opacity: 0                
                }
            ]
        },
        {
            id: 'six-container',
            alignment: 'left',
            hidden: false,
            title: 'Conclusion',
            image: './image/strike4.png',
            description: 'In summary, this map illustrates the industrial actions in Suzhou, emphasizing the importance of upskilling or providing support to all low-tech industries to foster inclusive economic growth.',
            location: {
                center: [120.69576,31.35232],
                zoom: 10,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'strike_actions',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'strike_demand',
                    opacity: 1,
                    duration: 3000              
                },
                {
                    layer: 'strike_industry',
                    opacity: 1,
                    duration: 3000                
                },
                {
                    layer: 'strike_heatmap',
                    opacity: 1,
                    duration: 3000              
                },
                {
                    layer: 'strike-2018',
                    opacity: 0,
                    duration:0               
                },
                {
                    layer: 'strike-2023',
                    opacity: 0,
                    duration:0               
                },
                {
                    layer: 'sip_boundary',
                    opacity: 1,
                    duration: 3000              
                },
                {
                    layer: 'primary-industry',
                    opacity: 1,
                    duration: 3000              
                },
                {
                    layer: 'secondary-industry',
                    opacity: 1,
                    duration: 3000              
                },
                {
                    layer: 'third-industry',
                    opacity: 1,
                    duration: 5000              
                }
            ],
            onChapterExit: [
                {
                    layer: 'strike_actions',
                    opacity: 0,
                },
                {
                    layer: 'strike_demand',
                    opacity: 0,                
                },
                {
                    layer: 'strike_industry',
                    opacity: 1,                
                },
                {
                    layer: 'strike_heatmap',
                    opacity: 1,                
                },
                {
                    layer: 'strike-2018',
                    opacity: 0,
                },
                {
                    layer: 'strike-2023',
                    opacity: 0,
                },
                {
                    layer: 'sip_boundary',
                    opacity: 1,                
                },
                {
                    layer: 'primary-industry',
                    opacity: 0,               
                },
                {
                    layer: 'secondary-industry',
                    opacity: 0                
                },
                {
                    layer: 'third-industry',
                    opacity: 0               
                }
            ]
        }
    ]
};