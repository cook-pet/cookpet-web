import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import Icon from '@material-ui/core/Icon';
import NatsumeTheme from '../NatsumeTheme';

class RichEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: this.props.defaultEditorState || EditorState.createEmpty()};
    this.focus = () => this.editor.focus();
    this.onChange = (editorState) => this.setState({editorState});
    this.onTab = (e) => this._onTab(e);
    this.toggleBlockType = (type) => this._toggleBlockType(type);
    this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
  }

  _onTab(e) {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  }

  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  render() {
    const {editorState} = this.state;
    let className = 'RichEditor-editor';
    var contentState = editorState.getCurrentContent();
    return (
      <div className="RichEditor-root">
        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <div className={className} onClick={this.focus}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            onChange={this.onChange}
            onTab={this.onTab}
            ref={(ref) => this.editor = ref}
            spellCheck={true}
          />
        </div>
      </div>
    );
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    default: return null;
  }
}

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'material-icons RichEditor-styleButton';
    let color = NatsumeTheme.palette.disabledColor;
    if (this.props.active) {
      color = NatsumeTheme.palette.primary2Color;
    }
    return (
      <Icon
        className={className}
        color={color}
        onMouseDown={this.onToggle}>
        {this.props.label}
      </Icon>
    );
  }
}

const BLOCK_TYPES = [
  {label: 'filter_1', style: 'header-one'},
  {label: 'filter_2', style: 'header-two'},
  {label: 'filter_3', style: 'header-three'},
  {label: 'format_quote', style: 'blockquote'},
  {label: 'format_list_bulleted', style: 'unordered-list-item'},
  {label: 'format_list_numbered', style: 'ordered-list-item'},
  {label: 'code', style: 'code-block'},
];

const BlockStyleControls = (props) => {
  const {editorState} = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return(
    <span className="RichEditor-controls">
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </span>
  );
};

var INLINE_STYLES = [
  {label: 'format_bold', style: 'BOLD'},
  {label: 'format_italic', style: 'ITALIC'},
  {label: 'format_underlined', style: 'UNDERLINE'},
];

const InlineStyleControls = (props) => {
  var currentStyle = props.editorState.getCurrentInlineStyle();

  return(
    <span className="RichEditor-controls">
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </span>
  );
};


export default RichEditor;
