import PhotoGallery from './PhotoGallery'
import './App.css'

function App() {
  const images = [
    {
      src: '/images/1.jpg',
      alt: 'Wedding photo 1'
    },
    {
      src: '/images/2.jpg',
      alt: 'Wedding photo 2'
    },
    {
      src: '/images/3.jpg',
      alt: 'Wedding photo 3'
    },
    {
      src: '/images/5.jpg',
      alt: 'Wedding photo 5'
    },
    {
      src: '/images/6.jpg',
      alt: 'Wedding photo 6'
    },
    {
      src: '/images/7.jpg',
      alt: 'Wedding photo 7'
    },
    {
      src: '/images/8.jpg',
      alt: 'Wedding photo 8'
    },
    {
      src: '/images/9.jpg',
      alt: 'Wedding photo 9'
    },
    {
      src: '/images/10.jpg',
      alt: 'Wedding photo 10'
    },
    {
      src: '/images/11.jpg',
      alt: 'Wedding photo 11'
    },
  ]

  return (
    <div className="app">
      <PhotoGallery images={images} />
      <div className="hero-section">
        <h1 className="title"><span className="title-italic">The</span> <span className="title-normal">Harralsons</span></h1>
        <p className="subtitle">Alyssa Wieand + Hunter Harralson</p>
      </div>
    </div>
  )
}

export default App

