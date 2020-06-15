/* This section of the code registers a new block, sets an icon and a category, and indicates what type of fields it'll include. */
  
wp.blocks.registerBlockType('call-to-action/banner', {
  title: 'Call-To-Action',
  description: 'Setze ein Call-To-Action Button ein.',
  icon: 'megaphone',
  category: 'common',
  attributes: {
    content: {type: 'string'},
    button: {type: 'string'},
    link: {type: 'string'}
  },
  
/* This configures how the content will work, and sets up the necessary elements */
  
  edit: function(props) {
    function updateContent(event) {
      props.setAttributes({content: event.target.value})
    }
    function updateButton(event) {
      props.setAttributes({button: event.target.value})
    }
    function updateLink(event) {
      props.setAttributes({link: event.target.value})
    }
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h3",
        null,
        "Call-To-Action"
      ),
      React.createElement("input", { placeholder: "Text", type: "text", value: props.attributes.content, onChange: updateContent }),
      React.createElement("input", { placeholder: "Button Text", type: "text", value: props.attributes.button, onChange: updateButton }),
      React.createElement('input', { placeholder: "https://example.com/", type: "url", value: props.attributes.link, autoFocus: true, onChange: updateLink})
    );
  },
  save: function(props) {
    var content = props.attributes.content;
    var button = props.attributes.button;
    var link = props.attributes.link;
    
    return wp.element.createElement(
      "div",
      {  className: "" }, 
      null,
      [
        wp.element.createElement(
          "div",
          {  className: "wp-block-call-to-action-item-1" }, 
          null,
          [
            wp.element.createElement(
              "span",
              {  className: "cta-text" },
              content
            ),
          ]
        ),
        wp.element.createElement(
          "div",
          {  className: "wp-block-call-to-action-item-2" }, 
          null,
          [
            wp.element.createElement(
              "div",
              { style: { position: "absolute"} }, 
              null,
              [
                wp.element.createElement(
                "a",
                { href: link, className: "cta-link" },
                button
                ),
              ]
            ),
            wp.element.createElement(
              "div",
              {  }, 
              null,
              [
                wp.element.createElement(
                "a",
                { href: link, className: "cta-button" },
                null
                ),
              ]
            )
          ]
        )
      ]
    );
  }
})