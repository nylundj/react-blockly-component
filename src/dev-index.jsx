/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactBlocklyComponent from './index';
import ConfigFiles from './initContent/content';
import parseWorkspaceXml from './BlocklyHelper';

class TestEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 0,
      toolboxCategories: null, //[] //parseWorkspaceXml(ConfigFiles.INITIAL_TOOLBOX_XML),
      toolboxBlocks: parseWorkspaceXml(ConfigFiles.INITIAL_TOOLBOX_XML)[0].blocks,
    };
    console.log("fsgdfgdfg: ", this.state.toolboxBlocks);
    console.log("test", this.state.test);
  }

  componentDidMount = () => {
    window.setTimeout(() => {
      this.setState({
        toolboxCategories: null
      });
    }, 2000);
  }

  workspaceDidChange = (workspace) => {
    const newXml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
    document.getElementById('generated-xml').innerText = newXml;

    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('code').value = code;
  }

  render = () => (
    <ReactBlocklyComponent.BlocklyEditor
      //toolboxCategories={this.state.toolboxCategories}
      toolboxCategories= {null}
      toolboxBlocks={this.state.toolboxBlocks}
      workspaceConfiguration={{
        grid: {
          spacing: 20,
          length: 3,
          colour: '#ccc',
          snap: true,
        },
      }}
      initialXml={ConfigFiles.INITIAL_XML}
      wrapperDivClassName="fill-height"
      workspaceDidChange={this.workspaceDidChange}
    />
  )
}

window.addEventListener('load', () => {
  const editor = React.createElement(TestEditor);
  ReactDOM.render(editor, document.getElementById('blockly'));
});
