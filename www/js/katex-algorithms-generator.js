//METHOD_1
var formula = 'x^0, 0 < \\epsilon < 1, \\epsilon_1, \\epsilon_2, M - ';
katex.render(formula, document.getElementById('method1_step_1_1'));

formula = '\\nabla{f(x)} = \\begin{pmatrix}' +  
  '\\frac{\\partial f(x)}{\\partial x_1}, ..., \\frac{\\partial f(x)}{\\partial x_n}' +
  ' \\end{pmatrix}^T';
katex.render(formula, document.getElementById('method1_step_1_2'));

formula = 'k = 0';
katex.render(formula, document.getElementById('method1_step_2'));

formula = '\\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method1_step_3'));

formula = 'x^{*} = x^k';
katex.render(formula, document.getElementById('method1_step_4_1'));

formula = 'k \\ge M';
katex.render(formula, document.getElementById('method1_step_5'));

formula = 'x^{*} = x^k';
katex.render(formula, document.getElementById('method1_step_5_1'));

formula = 't_k';
katex.render(formula, document.getElementById('method1_step_6'));

formula = 'x^{k+1} = x^k - t^k \\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method1_step_7'));

formula = 'f(x^{k+1}) - f(x^k) < 0';
katex.render(formula, document.getElementById('method1_step_8'));

formula = 't_k = \\frac{t_k}{2}';
katex.render(formula, document.getElementById('method1_step_8_2'));

formula = '\\begin{Vmatrix} x^{k+1} - x^k \\end{Vmatrix} < \\epsilon _2, ' +
  '\\begin{vmatrix} f(x^{k+1}) - f(x^k) \\end{vmatrix} < \\epsilon _2';
katex.render(formula, document.getElementById('method1_step_9'));

formula = 'k';
katex.render(formula, document.getElementById('method1_step_9_1_1'));

formula = 'k = k - 1';
katex.render(formula, document.getElementById('method1_step_9_1_2'));

formula = 'x^{*} = x^{k+1}';
katex.render(formula, document.getElementById('method1_step_9_1_3'));

formula = 'k = k + 1';
katex.render(formula, document.getElementById('method1_step_9_2'));
//METHOD_2
formula = 'x^0, \\epsilon_1 > 0, \\epsilon_2 > 0,';
katex.render(formula, document.getElementById('method2_step_1_1'));

formula = '\\nabla{f(x)} = \\begin{pmatrix}' +  
  '\\frac{\\partial f(x)}{\\partial x_1}, ..., \\frac{\\partial f(x)}{\\partial x_n}' +
  ' \\end{pmatrix}^T';
katex.render(formula, document.getElementById('method2_step_1_2'));

formula = 'k = 0';
katex.render(formula, document.getElementById('method2_step_2'));

formula = '\\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method2_step_3'));

formula = '\\begin{Vmatrix}\\nabla{f(x^k)}\\end{Vmatrix} < \\epsilon _1';
katex.render(formula, document.getElementById('method2_step_4'));

formula = 'x^{*} = x^k';
katex.render(formula, document.getElementById('method2_step_4_1'));

formula = 'k \\ge M';
katex.render(formula, document.getElementById('method2_step_5'));

formula = 'x^{*} = x^k';
katex.render(formula, document.getElementById('method2_step_5_1'));

formula = 't^{*}_k';
katex.render(formula, document.getElementById('method2_step_6_1'));

formula = '\\phi(t _k) = f(x^k - t _k \\nabla{f(x^k)}) -> \\min _{t _k}';
katex.render(formula, document.getElementById('method2_step_6_2'));

formula = 'x^{k+1} = x^k - t^k \\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method2_step_7'));

formula = '\\begin{Vmatrix} x^{k+1} - x^k \\end{Vmatrix} < \\epsilon _2, ' +
  '\\begin{vmatrix} f(x^{k+1}) - f(x^k) \\end{vmatrix} < \\epsilon _2';
katex.render(formula, document.getElementById('method2_step_8'));

formula = 'k';
katex.render(formula, document.getElementById('method2_step_8_1_1'));

formula = 'k = k - 1';
katex.render(formula, document.getElementById('method2_step_8_1_2'));

formula = 'x^{*} = x^{k+1}';
katex.render(formula, document.getElementById('method2_step_8_1_3'));

formula = 'k = k + 1';
katex.render(formula, document.getElementById('method2_step_8_2'));
//METHOD_3
formula = 'x^0, \\epsilon > 0, \\epsilon_1 > 0, \\epsilon_2 > 0,';
katex.render(formula, document.getElementById('method3_step_1_1'));

formula = '\\nabla{f(x)}';
katex.render(formula, document.getElementById('method3_step_1_2'));

formula = 'j = 0';
katex.render(formula, document.getElementById('method3_step_2'));

formula = 'j \\ge M';
katex.render(formula, document.getElementById('method3_step_3'));

formula = 'j \\ge M';
katex.render(formula, document.getElementById('method3_step_3_1_1'));

formula = 'x^{*} = x^{jk}';
katex.render(formula, document.getElementById('method3_step_3_1'));

formula = 'k = 0';
katex.render(formula, document.getElementById('method3_step_4'));

formula = 'k \\le n-1';
katex.render(formula, document.getElementById('method3_step_5'));

formula = 'k \\le n-1';
katex.render(formula, document.getElementById('method3_step_5_1'));

formula = 'k  = n';
katex.render(formula, document.getElementById('method3_step_5_2_1'));

formula = 'j = j + 1';
katex.render(formula, document.getElementById('method3_step_5_2_2'));

formula = 'x^{j + 1, k} = x^{jn}';
katex.render(formula, document.getElementById('method3_step_5_2_3'));

formula = '\\nabla{f(x^{jk})}';
katex.render(formula, document.getElementById('method3_step_6'));

formula = '\\begin{Vmatrix} \\nabla{f(x^{jk})} \\end{Vmatrix} < \\epsilon _1';
katex.render(formula, document.getElementById('method3_step_7'));

formula = 'x^{*} = x^{jk}';
katex.render(formula, document.getElementById('method3_step_7_1'));

formula = 't_k';
katex.render(formula, document.getElementById('method3_step_8'));

formula = 'x^{jk+1}: x^{jk+1} = x^{jk} - t_k \\begin{pmatrix} \\frac{\\partial f(x)}{\\partial x_{k+1}} \\end{pmatrix}_{x = x^{jk}} \\cdot e_{k+1}';
katex.render(formula, document.getElementById('method3_step_9'));

formula = 'f(x^{jk+1}) - f(x^{jk}) < 0';
katex.render(formula, document.getElementById('method3_step_10_1'));

formula = 'f(x^{jk+1}) - f(x^{jk}) < - \\epsilon \\begin{Vmatrix} \\nabla{f(x^{jk})} \\end{Vmatrix}^2';
katex.render(formula, document.getElementById('method3_step_10_2'));

formula = 't_k = \\frac{t_k}{2}';
katex.render(formula, document.getElementById('method3_step_10_2_2'));

formula = '\\begin{Vmatrix} x^{jk+1} - x^{jk} \\end{Vmatrix} < \\epsilon _2 ,' + 
'\\begin{vmatrix} f(x^{jk+1}) - f(x^{jk}) \\end{vmatrix} < \\epsilon _2';
katex.render(formula, document.getElementById('method3_step_11'));

formula = 'j';
katex.render(formula, document.getElementById('method3_step_11_1_1'));

formula = 'j - 1';
katex.render(formula, document.getElementById('method3_step_11_1_2'));

formula = 'x^{jk+1}';
katex.render(formula, document.getElementById('method3_step_11_1_3'));

formula = 'x^{*} = x^{jk+1}';
katex.render(formula, document.getElementById('method3_step_11_1_4'));

formula = 'k = k + 1';
katex.render(formula, document.getElementById('method3_step_11_2'));
//METHOD_4
formula = 'x^0, \\epsilon_1 > 0, \\epsilon_2 > 0,';
katex.render(formula, document.getElementById('method4_step_1_1'));

formula = '\\nabla{f(x)}';
katex.render(formula, document.getElementById('method4_step_1_2'));

formula = 'j = 0';
katex.render(formula, document.getElementById('method4_step_2'));

formula = 'j \\ge M';
katex.render(formula, document.getElementById('method4_step_3'));

formula = 'j \\ge M';
katex.render(formula, document.getElementById('method4_step_3_1_1'));

formula = 'x^{*} = x^{jk}';
katex.render(formula, document.getElementById('method4_step_3_1_2'));

formula = 'j < M';
katex.render(formula, document.getElementById('method4_step_3_2'));

formula = 'k = 0';
katex.render(formula, document.getElementById('method4_step_4'));

formula = 'k \\le n - 1';
katex.render(formula, document.getElementById('method4_step_5'));

formula = 'k \\le n - 1';
katex.render(formula, document.getElementById('method4_step_5_1'));

formula = 'k = n';
katex.render(formula, document.getElementById('method4_step_5_2_1'));

formula = 'j = j + 1';
katex.render(formula, document.getElementById('method4_step_5_2_2'));

formula = 'x^{j+1, k} = x^{jn}';
katex.render(formula, document.getElementById('method4_step_5_2_3'));

formula = '\\nabla{f(x^{jk})}';
katex.render(formula, document.getElementById('method4_step_6'));

formula = '\\begin{Vmatrix} \\nabla{f(x^{jk})} \\end{Vmatrix} < \\epsilon _1';
katex.render(formula, document.getElementById('method4_step_7'));

formula = 'x^{*} = x^{jk}';
katex.render(formula, document.getElementById('method4_step_7_1'));

formula = 't^{*}_k';
katex.render(formula, document.getElementById('method4_step_8_0'));

formula = '\\phi(t _k) = f\\begin{pmatrix}x^{jk} - t _k \\begin{pmatrix} \\frac{\\partial f(x)}{\\partial x_{k+1}} \\end{pmatrix}_{x = x^{jk}} . e_{k+1} \\end{pmatrix}-> \\min _{t _k}';
katex.render(formula, document.getElementById('method4_step_8'));

formula = 'x^{jk+1}: x^{jk+1} = x^{jk} - t*_k \\begin{pmatrix} \\frac{\\partial f(x)}{\\partial x_{k+1}} \\end{pmatrix}_{x = x^{jk}} \\cdot e_{k+1}';
katex.render(formula, document.getElementById('method4_step_9'));

formula = '\\begin{Vmatrix} x^{jk+1} - x^{jk} \\end{Vmatrix} < \\epsilon _2 ,' + 
'\\begin{vmatrix} f(x^{jk+1}) - f(x^{jk}) \\end{vmatrix} < \\epsilon _2';
katex.render(formula, document.getElementById('method4_step_10'));

formula = 'j';
katex.render(formula, document.getElementById('method4_step_10_1_1'));

formula = 'j - 1';
katex.render(formula, document.getElementById('method4_step_10_1_2'));

formula = 'x^{*} = x^{jk + 1}';
katex.render(formula, document.getElementById('method4_step_10_1_3'));

formula = 'k = k + 1';
katex.render(formula, document.getElementById('method4_step_10_2'));
//METHOD_5
formula = 'x^0, \\epsilon_1 > 0, \\epsilon_2 > 0, M - ';
katex.render(formula, document.getElementById('method5_step_1_1'));

formula = '\\nabla{f(x)}';
katex.render(formula, document.getElementById('method5_step_1_2'));

formula = 'k = 0';
katex.render(formula, document.getElementById('method5_step_2'));

formula = '\\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method5_step_3'));

formula = '\\begin{Vmatrix} \\nabla{f(x^k)} \\end{Vmatrix} < \\epsilon _1';
katex.render(formula, document.getElementById('method5_step_4'));

formula = 'x^{*} = x^{k}';
katex.render(formula, document.getElementById('method5_step_4_1'));

formula = 'k \\ge M';
katex.render(formula, document.getElementById('method5_step_5'));

formula = 'x^{*} = x^{k}';
katex.render(formula, document.getElementById('method5_step_5_1'));

formula = 'k = 0';
katex.render(formula, document.getElementById('method5_step_5_2_1'));

formula = 'k \\ge 1';
katex.render(formula, document.getElementById('method5_step_5_2_2'));

formula = 'd^0 = -\\nabla{f(x^0)}';
katex.render(formula, document.getElementById('method5_step_6'));

formula = '\\beta_{k-1} = \\frac{\\begin{Vmatrix} \\nabla{f(x^k)} \\end{Vmatrix}^2}{\\begin{Vmatrix} \\nabla{f(x^{k-1})} \\end{Vmatrix}^2}' + 
'\\begin{bmatrix} \\beta_{k-1} = \\Bigg\\{ \\begin{matrix} \\frac{( \\nabla{f(x^k)}, \\begin{bmatrix} \\nabla{f(x^k)} - \\nabla{f(x^{k-1})} \\end{bmatrix} )}{ \\begin{Vmatrix} \\nabla{f(x^{k-1})} \\end{Vmatrix}^2 }, k \\notin J \\\\ 0, k \\in J \\end{matrix} \\end{bmatrix}';
katex.render(formula, document.getElementById('method5_step_7'));

formula = 'd^k = -\\nabla{f(x^k)} + \\beta_{k-1}d^{k-1}';
katex.render(formula, document.getElementById('method5_step_8'));

formula = 't^{*}_k';
katex.render(formula, document.getElementById('method5_step_9_0'));

formula = '\\phi(t _k) = f\\begin{pmatrix}x^k + t_k d^k \\end{pmatrix}-> \\min_{t_k}';
katex.render(formula, document.getElementById('method5_step_9'));

formula = 'x^{k+1} = x^k + t*_k d^k';
katex.render(formula, document.getElementById('method5_step_10'));

formula = '\\begin{Vmatrix} x^{k+1} - x^{k} \\end{Vmatrix} < \\epsilon _2 ,' + 
'\\begin{vmatrix} f(x^{k+1}) - f(x^{k}) \\end{vmatrix} < \\epsilon _2';
katex.render(formula, document.getElementById('method5_step_11'));

formula = 'k';
katex.render(formula, document.getElementById('method5_step_11_1_1'));

formula = 'k - k';
katex.render(formula, document.getElementById('method5_step_11_1_2'));

formula = 'x^{*} = x^{k + 1}';
katex.render(formula, document.getElementById('method5_step_11_1_3'));

formula = 'k = k + 1';
katex.render(formula, document.getElementById('method5_step_11_2'));
//METHOD_6
formula = 'x^0, \\epsilon_1 > 0, \\epsilon_2 > 0, M - ';
katex.render(formula, document.getElementById('method6_step_1_1'));

formula = '\\nabla{f(x)}';
katex.render(formula, document.getElementById('method6_step_1_2'));

formula = 'k = 0, A^0 = E';
katex.render(formula, document.getElementById('method6_step_2'));

formula = '\\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method6_step_3'));

formula = '\\begin{Vmatrix} \\nabla{f(x^k)} \\end{Vmatrix} < \\epsilon _1';
katex.render(formula, document.getElementById('method6_step_4'));

formula = 'x^{*} = x^{k}';
katex.render(formula, document.getElementById('method6_step_4_1'));

formula = 'k \\ge M';
katex.render(formula, document.getElementById('method6_step_5'));

formula = 'x^{*} = x^{k}';
katex.render(formula, document.getElementById('method6_step_5_1'));

formula = 'k = 0';
katex.render(formula, document.getElementById('method6_step_5_2_1'));

formula = 'k \\ge 1';
katex.render(formula, document.getElementById('method6_step_5_2_2'));

formula = '\\Delta g^k = \\nabla{f(x^{k+1})} - \\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method6_step_6'));

formula = '\\Delta x^k = x^{k+1} - x^k';
katex.render(formula, document.getElementById('method6_step_7'));

formula = 'A^k _c = \\frac{\\Delta x^k(\\Delta x^k)^T}{(\\Delta x^k)^T \\Delta g^k} - \\frac{A^k \\Delta g^k (\\Delta g^k)^T A^k}{(\\Delta g^k)^T A^k \\Delta g^k}';
katex.render(formula, document.getElementById('method6_step_8'));

formula = 'A^{k+1} = A^k + A^k _c';
katex.render(formula, document.getElementById('method6_step_9'));

formula = 'd^k = -A^k \\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method6_step_10'));

formula = 't^{*}_k';
katex.render(formula, document.getElementById('method6_step_11_0'));

formula = '\\phi(t _k) = f\\begin{pmatrix}x^k + t_k A^k \\nabla{f(x^k)} \\end{pmatrix}-> \\min_{t_k}';
katex.render(formula, document.getElementById('method6_step_11'));

formula = 'x^{k+1} = x^k - t*_k A^k \\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method6_step_12'));

formula = '\\begin{Vmatrix} x^{k+1} - x^{k} \\end{Vmatrix} < \\epsilon _2 ,' + 
'\\begin{vmatrix} f(x^{k+1}) - f(x^{k}) \\end{vmatrix} < \\epsilon _2';
katex.render(formula, document.getElementById('method6_step_13'));

formula = 'k';
katex.render(formula, document.getElementById('method6_step_13_1_1'));

formula = 'k - 1';
katex.render(formula, document.getElementById('method6_step_13_1_2'));

formula = 'x^{*} = x^{k+1}';
katex.render(formula, document.getElementById('method6_step_13_1_3'));

formula = 'k = k + 1';
katex.render(formula, document.getElementById('method6_step_13_2'));
//METHOD_7
formula = 'x^0';
katex.render(formula, document.getElementById('method7_step_1_1'));

formula = '\\Delta > 0';
katex.render(formula, document.getElementById('method7_step_1_2'));

formula = '\\epsilon_1';
katex.render(formula, document.getElementById('method7_step_1_3'));

formula = '\\epsilon_2';
katex.render(formula, document.getElementById('method7_step_1_4'));

formula = 'f\'(x^0)';
katex.render(formula, document.getElementById('method7_step_2'));

formula = 'x^0';
katex.render(formula, document.getElementById('method7_step_3'));

formula = 'f\'(x^0) < 0';
katex.render(formula, document.getElementById('method7_step_3_1_1'));

formula = 'x^{k+1} = x^k + 2^k\\Delta, k = 0, 1, ...,';
katex.render(formula, document.getElementById('method7_step_3_1_2'));

formula = 'x^M';
katex.render(formula, document.getElementById('method7_step_3_1_3'));

formula = 'f\'(x^{M - 1})f\'(x^M) \\le 0';
katex.render(formula, document.getElementById('method7_step_3_1_4'));

formula = 'f\'(x^0) > 0';
katex.render(formula, document.getElementById('method7_step_3_2_1'));

formula = 'x^{k+1} = x^k - 2^k\\Delta, k = 0, 1, ...,';
katex.render(formula, document.getElementById('method7_step_3_2_2'));

formula = 'x^M';
katex.render(formula, document.getElementById('method7_step_3_2_3'));

formula = 'f\'(x^{M - 1})f\'(x^M) \\le 0';
katex.render(formula, document.getElementById('method7_step_3_2_4'));

formula = 'x_1 = x^{M - 1}, x_2 = x^M';
katex.render(formula, document.getElementById('method7_step_4_1'));

formula = 'f(x_1) = f_1, f\'(x_1) = f\'_1, f(x_2) = f_2, f\'(x_2) = f\'_2';
katex.render(formula, document.getElementById('method7_step_4_2'));

formula = '\\bar{x} = \\Bigg\\{ \\begin{matrix} x_2, \\mu < 0 \\\\ x_2 - \\mu (x_2 - x_1), 0 \\le \\mu \\le 1\\\\ x_1, \\mu > 1, \\end{matrix}';
katex.render(formula, document.getElementById('method7_step_5_1'));

formula = '\\mu = \\frac{f\'_2 + w - z}{f\'_2 - f\'_1 +2w}';
katex.render(formula, document.getElementById('method7_step_5_2_1'));

formula = 'z = \\frac{3(f_1 - f_2)}{x_2 - x_1} + f\'_1 + f\'_2';
katex.render(formula, document.getElementById('method7_step_5_2_2'));

formula = 'w = \\Bigg\\{ \\begin{matrix} (z^2 - f\'_1f\'_2)^{\\frac{1}{2}}, x_1 < x_2 \\\\ -(z^2 - f\'_1f\'_2)^{\\frac{1}{2}}, x_1 > x_2  \\end{matrix}';
katex.render(formula, document.getElementById('method7_step_5_2_3'));

formula = 'f(\\bar{x})';
katex.render(formula, document.getElementById('method7_step_5_3'));

formula = 'f(\\bar{x}) < f(x_1)';
katex.render(formula, document.getElementById('method7_step_6_1'));

formula = 'f(\\bar{x}) \\ge f(x_1)';
katex.render(formula, document.getElementById('method7_step_6_2_1'));

formula = '\\bar{x}';
katex.render(formula, document.getElementById('method7_step_6_2_2'));

formula = '\\bar{x} = \\bar{x} - \\frac{1}{2}(\\bar{x} - x_1)';
katex.render(formula, document.getElementById('method7_step_6_2_3'));

formula = 'f(\\bar{x}) \\le f(x_1)';
katex.render(formula, document.getElementById('method7_step_6_2_4'));

formula = '\\begin{vmatrix} f\'(\\bar{x}) \\end{vmatrix} \\le \\epsilon_1,' + 
' \\begin{vmatrix} \\frac{\\bar{x} - x_1}{\\bar{x}} \\end{vmatrix} \\le \\epsilon_2';
katex.render(formula, document.getElementById('method7_step_7'));

formula = 'x^{*} \\equiv \\bar{x}';
katex.render(formula, document.getElementById('method7_step_7_1'));

formula = 'x_1 = \\bar{x}, x_2 = x_1';
katex.render(formula, document.getElementById('method7_step_7_2_1'));

formula = 'f\'(\\bar{x})f\'(x_1) < 0';
katex.render(formula, document.getElementById('method7_step_7_2_2'));

formula = 'x_1 = \\bar{x}, x_2 = x_2';
katex.render(formula, document.getElementById('method7_step_7_2_3'));

formula = 'f\'(\\bar{x})f\'(x_2) < 0';
katex.render(formula, document.getElementById('method7_step_7_2_4'));
//METHOD_8
formula = '\\nabla{f(x)}';
katex.render(formula, document.getElementById('method8_step_1'));

formula = '\\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method8_step_3'));

formula = '\\begin{Vmatrix} \\nabla{f(x^k)} \\end{Vmatrix} \\le \\epsilon _1';
katex.render(formula, document.getElementById('method8_step_4'));

formula = 'd^k = -\\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method8_step_8'));

formula = 'd^k = -H^{-1}(x^k) \\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method8_step_9'));

formula = 'x^{k+1} = x^k + t_k d^k';
katex.render(formula, document.getElementById('method8_step_10_1'));

formula = 'd^k = -H^{-1}(x^k) \\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method8_step_10_2'));

formula = 'f(x^{k+1}) < f(x^k)';
katex.render(formula, document.getElementById('method8_step_10_3'));

formula = 'd^k = -\\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method8_step_10_4'));

formula = '\\begin{Vmatrix} x^{k+1} - x^{k} \\end{Vmatrix} < \\epsilon _2 ,' + 
'\\begin{vmatrix} f(x^{k+1}) - f(x^{k}) \\end{vmatrix} < \\epsilon _2';
katex.render(formula, document.getElementById('method8_step_11'));
//METHOD_9
formula = '\\nabla{f(x)}';
katex.render(formula, document.getElementById('method9_step_1'));

formula = '\\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method9_step_3'));

formula = '\\begin{Vmatrix} \\nabla{f(x^k)} \\end{Vmatrix} \\le \\epsilon _1';
katex.render(formula, document.getElementById('method9_step_4'));

formula = 'd^k = -H^{-1}(x^k) \\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method9_step_8_1'));

formula = 'd^k = -\\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method9_step_8_2'));

formula = 'x^{k+1} = x^k + t_k d^k';
katex.render(formula, document.getElementById('method9_step_9'));

formula = 'x^{k+1} = x^k + t_k d^k';
katex.render(formula, document.getElementById('method9_step_10'));

formula = 'x^{k+1} = x^k + t*_k d^k';
katex.render(formula, document.getElementById('method9_step_11'));

formula = '\\begin{Vmatrix} x^{k+1} - x^{k} \\end{Vmatrix} < \\epsilon _2 ,' + 
'\\begin{vmatrix} f(x^{k+1}) - f(x^{k}) \\end{vmatrix} < \\epsilon _2';
katex.render(formula, document.getElementById('method9_step_12'));
//METHOD_10
formula = '\\nabla{f(x)}';
katex.render(formula, document.getElementById('method10_step_1'));

formula = '\\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method10_step_3'));

formula = '\\begin{Vmatrix} \\nabla{f(x^k)} \\end{Vmatrix} \\le \\epsilon _1';
katex.render(formula, document.getElementById('method10_step_4'));

formula = 'H(x^k) + \\mu^k E';
katex.render(formula, document.getElementById('method10_step_7'));

formula = '\\Big[ H(x^k) + \\mu^k E\\Big]';
katex.render(formula, document.getElementById('method10_step_8'));

formula = 'd^k = - \\Big[ H(x^k) + \\mu^k E\\Big]^{-1} \\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method10_step_9'));

formula = 'x^{k+1} = x^k - \\Big[ H(x^k) + \\mu^k E\\Big]^{-1} \\nabla{f(x^k)}';
katex.render(formula, document.getElementById('method10_step_10'));

formula = 'f(x^{k+1}) < f(x^{k})';
katex.render(formula, document.getElementById('method10_step_11'));

formula = 'k = k+1' + '\\mu^{k+1} = \\frac{\\mu^k}{2}';
katex.render(formula, document.getElementById('method10_step_12'));

formula = '\\mu^k = 2\\mu^k';
katex.render(formula, document.getElementById('method10_step_13'));