import React from "react";

export default class ProjectList extends React.Component {
  render() {
    const Image = ({project: {img, category}}) => <img src={img} alt={category}/>;

    const projects = this.props.projects.map((project, index) =>
      <li className='image' key={index}>
        <Image project={project}/>
      </li>);

    return (
      <ul className='project-list-component'>{projects}</ul>
    )
  }
}
