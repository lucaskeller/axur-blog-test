import React from 'react'

export default function BannerItem(props) {
  const { title, link, card } = props
  return (
    <div className="banner-item" onClick={() => window.location(link)}>
      <img src={require(`../../../assets/images/${card}`)} alt={title} />
    </div>
  )
}
