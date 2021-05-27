import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>Version 0.1.0</h4>
      <p>This is a Simple Task-Tracker App using <strong>reactjs</strong> for the ui and <strong>json-serve</strong>r for back-end.</p>
      <p>It allows:-</p>
      <li>Adding Tasks</li>
      <li>Setting reminder on Tasks</li>
      <li>Deleting Tasks</li>
      <li>Retriving Tasks</li>
      <li>Routing to other pages</li>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About
