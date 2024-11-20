import './App.css'
import Image from "/images/illustration-article.svg"


function App() {

  return (
    <div className='container'>
      <img className='image' src={Image} />

      <div className='text'>
        <p className='p1'>Learning</p>

        <p className='date'>Published 21 Dec 2023</p>

        <h2>HTML & CSS foundations</h2>

        <p style={{color: 'gray'}}>These languages are the backbone of every website, defining structure, content, and presentation.</p>

      </div>
      <div className="avatar">
        <img className='avatar-image' src="/images/image-avatar.webp" />
        <h4>Greg Hooper</h4>
      </div>
    </div>
  )
}

export default App
