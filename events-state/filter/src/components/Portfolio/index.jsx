import React from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";
import projectListData from "../../mock/projectListData.json"

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All',
      projects: projectListData,
    }

    this.setSelected = this.setSelected.bind(this)
  }

  setSelected(filter) {
    this.setState({selected: filter})
    if (filter === 'All') this.setState({projects: projectListData})
    else this.setState({projects: projectListData.filter(({category}) => category === filter)})
  }

  render() {
    const filters = ["All", "Websites", "Flayers", "Business Cards"]

    return (
      <div className='portfolio-component'>
        <Toolbar
          filters={filters}
          selected={this.state.selected}
          onSelectFilter={filter => this.setSelected(filter)}
        />
        <ProjectList projects={this.state.projects}/>
      </div>
    )
  }
}
