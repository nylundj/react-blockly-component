const INITIAL_XML = '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>';

const INITIAL_TOOLBOX_XML_OLD = '<xml xmlns="http://www.w3.org/1999/xhtml" id="toolbox" style="display: none;">\n' +
  '  <category name="Logic" colour="#5C81A6">\n' +
  '    <block type="controls_if"></block>\n' +
  '    <block type="logic_compare">\n' +
  '      <field name="OP">EQ</field>\n' +
  '    </block>\n' +
  '    <block type="logic_operation">\n' +
  '      <field name="OP">AND</field>\n' +
  '    </block>\n' +
  '    <block type="logic_negate"></block>\n' +
  '    <block type="logic_boolean">\n' +
  '      <field name="BOOL">TRUE</field>\n' +
  '    </block>\n' +
  '    <block type="logic_null"></block>\n' +
  '    <block type="logic_ternary"></block>\n' +
  '  </category>\n' +
  '  <sep></sep>\n' +
  '  <category name="Variables" colour="#A65C81" custom="VARIABLE"></category>\n' +
  '  <category name="Functions" colour="#9A5CA6" custom="PROCEDURE"></category>\n' +
  '</xml>';


const INITIAL_TOOLBOX_XML = '<xml xmlns="http://www.w3.org/1999/xhtml" id="toolbox" style="display: none;">\n' +
  '  <category name="Logic" colour="#5C81A6">\n' +
  '    <block type="controls_if"></block>\n' +
  '    <block type="logic_compare">\n' +
  '      <field name="OP">EQ</field>\n' +
  '    </block>\n' +
  '  </category>\n' +
  '  <category name="Variables" colour="#A65C81" custom="VARIABLE"></category>\n' +
  '</xml>';

//  '  <category name="Variables" colour="#A65C81" custom="VARIABLE"></category>\n' +

const INITIAL_TOOLBOX_XML_CUSTOM_NO_CATEGORIES = '<xml xmlns="http://www.w3.org/1999/xhtml" id="toolbox" style="display: none;">\n' +
  '    <block type="controls_if"></block>\n' +
  '    <block type="logic_compare">\n' +
  '      <field name="OP">EQ</field>\n' +
  '    </block>\n' +
  '</xml>';

const INITIAL_TOOLBOX_CATEGORIES_OLD = [
  {
    name: 'Controls',
    blocks: [
      { type: 'controls_if' },
      {
        type: 'controls_repeat_ext',
        values: {
          TIMES: {
            type: 'math_number',
            shadow: true,
            fields: {
              NUM: 10,
            },
          },
        },
        statements: {
          DO: {
            type: 'text_print',
            shadow: true,
            values: {
              TEXT: {
                type: 'text',
                shadow: true,
                fields: {
                  TEXT: 'abc',
                },
              },
            },
          },
        },
      },
    ],
  },
  {
    name: 'Text',
    blocks: [
      { type: 'text' },
      {
        type: 'text_print',
        values: {
          TEXT: {
            type: 'text',
            shadow: true,
            fields: {
              TEXT: 'abc',
            },
          },
        },
      },
    ],
  },
];

const INITIAL_TOOLBOX_CATEGORIES = [{}];

const ConfigFiles = {
  INITIAL_XML,
  INITIAL_TOOLBOX_XML,
  INITIAL_TOOLBOX_CATEGORIES,
};

export default ConfigFiles;
