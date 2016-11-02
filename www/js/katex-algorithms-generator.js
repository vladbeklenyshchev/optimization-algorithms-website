var formula = '\\nabla{f(x)} = \\begin{pmatrix}' +  
  '\\frac{\\partial f(x)}{\\partial x_1}, ..., \\frac{\\partial f(x)}{\\partial x_n}' +
  ' \\end{pmatrix}^T';
katex.render(formula, document.getElementById('method1_step_1'));

formula = '\\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method1_step_3'));

formula = 'x^{k+1} = x^k - t^k \\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method1_step_7'));

formula = 'f(x^{k+1}) - f(x^k) < 0';
katex.render(formula, document.getElementById('method1_step_8'));

formula = '\\begin{Vmatrix} x^{k+1} - x^k \\end{Vmatrix} < \\epsilon _2, ' +
  '\\begin{vmatrix} f(x^{k+1}) - f(x^k) \\end{vmatrix} < \\epsilon _2';
katex.render(formula, document.getElementById('method1_step_9'));

formula = '\\nabla{f(x)} = \\begin{pmatrix}' +  
  '\\frac{\\partial f(x)}{\\partial x_1}, ..., \\frac{\\partial f(x)}{\\partial x_n}' +
  ' \\end{pmatrix}^T';
katex.render(formula, document.getElementById('method2_step_1'));

formula = '\\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method2_step_3'));

formula = '||\\nabla{f(x^k)}|| < \\epsilon _1';
katex.render(formula, document.getElementById('method2_step_4'));

formula = '\\phi(t _k) = f(x^k - t _k \\nabla{f(x^k)}) -> \\min _{t _k}';
katex.render(formula, document.getElementById('method2_step_6'));

formula = 'x^{k+1} = x^k - t^k \\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method2_step_7'));

formula = '\\begin{Vmatrix} x^{k+1} - x^k \\end{Vmatrix} < \\epsilon _2, ' +
  '\\begin{vmatrix} f(x^{k+1}) - f(x^k) \\end{vmatrix} < \\epsilon _2';
katex.render(formula, document.getElementById('method2_step_8'));