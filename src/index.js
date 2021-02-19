
/**
 * 模板渲染原理
 * @param {String} template
 * @param {Object} data
 */
function render(template, data) {
  let head = "let str = '';with(obj){str+=`",
    tail = "`; return str;}";
  const variable = /\{\{([^}]+)\}\}/g; // => 获取 {{ var }} 语法 =>提取 (var)
  const expression = /\{\%([^%]+)\%\}/g; // => 获取 {{% expression %}} 表达式 =>提取 (expression)
  template = head + template;
  template = template.replace(variable, (_, r) => "${" + r + "}");
  template = template.replace(expression, (_, r) => {
    return "`;" + r + ";str+=`";
  });
  template += tail;
  console.log(template)
  const fn = new Function("obj", template);
  return fn(data).replace('\r\n', '');
}

module.exports = { render }
