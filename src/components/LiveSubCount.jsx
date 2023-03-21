import React, { useState } from 'react'

import '../styles/component-styles/live-sub-count.scss'

function LiveSubCount() {
    const apiKey = "AIzaSyDljC0YPbsBUNgn5NMHPVvU4nBg-dU4Ei8"

    const [subscribers, setSubscribers] = useState(0)
    const [views, setViews] = useState(0)
    const [videos, setVideos] = useState(0)

    const getChannelData = () => {
        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC-4I-cHMxoF6ovN8qJ5f-lQ&key=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                setSubscribers(data.items[0].statistics.subscriberCount)
                setViews(data.items[0].statistics.viewCount)
                setVideos(data.items[0].statistics.videoCount)
            })
    }

    getChannelData()

    return (
        <div className="container">
            <div className="channel-stats">
                <div className="channel-avatar">
                    <img src="/lnp.png" alt="LNP Productions" />
                </div>
                <div className="channel-info">
                    <h1 className="channel-name">LNP Productions</h1>
                    <p className="channel-sub-count">Subscribers: {subscribers}</p>
                    <p className="channel-view-count">Views: {views}</p>
                    <p className="channel-video-count">Videos: {videos}</p>
                </div>
            </div>
        </div>
    )
}

export default LiveSubCount