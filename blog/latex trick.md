### 1. 格式类标记
#### 1.1 输入单行公式
```
  1| $$ $$
```
#### 1.2 输入行内公式
```
  1| $ $
```
#### 1.3 加粗
```
  1| {\mathbf h}
```
**h**
#### 1.4 表格
|姓名|年龄|成绩|
|:---|---:|:---:|
|张三|19|99|
|流亡三|20|333|
### 2. 常用代数字符
#### 2.1 括号和分隔符
|输入|显示|输入|显示|
|:-:|-|-|-|
|\langle|<|\rangle|>|
|\lceil|$\lceil$|\rceil|$\rceil$|
|\lfloor|$\lfloor$|\rfloor|$\rfloor$|
|\lbrace|{|\rbrace|}|
#### 2.2 分数
```
  1|$$\frac{a-1}{b-1} \quad and \quad {a+1\over b+1} $$
```
$$\frac{a-1}{b-1}\quad and\quad{a+1\over b+1} $$
#### 2.3 矢量
```
  1| $$\overleftarrow{xy}\quad and \quad \overleftrightarrow{xyz} \quad and \quad \overrightarrow{yz}$$
```
$$ \overleftarrow{xy} \quad and \quad \overleftrightarrow{yz} \quad and \quad \overrightarrow{yz}$$
$$ \overleftarrow{xy}$$$$\overleftrightarrow{yddz}$$$$\overrightarrow{yz}$$

#### 2.4 积分
```
  1| $$\int_0^1 {x^2} \,{\rm d}x$$
```
$$\int_0^1 {x^2} \,{\rm d}x $$ $$\int_0^1 {x^2} {\rm d}x$$ $$\int_0^1{x^2} \dd x$$ 

#### 2.5 累加累乘
```
  1| $$\sum_{i=1}^n\frac{1}{i^2} \quad and \quad \prob_{i=1}^n \frac{1}{i^2} \quad and \quad \bigcup_{i-1}^2 R$$
```
$$\sum_{i=1}^n\frac{1}{i^2} \quad and \quad \prod_{i=1}^n \frac{1}{i^2} \quad and \quad \bigcup_{q_i{}^j=1}^{ddd}R$$
$$\bigcup_{q_i{}^j=1}^{ddd}R$$ 
$$\bigcup_{q_i^{\,j}=1}^{ddd}R$$

```
我比较喜欢 $$\bigcup_{q_i^{\,j}=1}^{ddd}R$$
```
$$\large  \widetilde{W}^{k\rightarrow k_i+G}$$

$$ \LARGE^{k}$$$$\Large W^{k}$$$$\large W^{k}$$$$W$$$$\scriptsize W$$$$\tiny W$$
$$\blacksquare$$
#### 2.51 求和排除对角线
1. 
$$
\sum_{\substack{m,m' \\ m\neq m' }}O_{mm'}
$$

2. 
$$
\sum_{m}\sum_{m'\neq m}O_{mm'}
$$
==我一般用第二种== 

3. 
$$
{\sum_{m,m'}}'O_{mm'}\\
打撇排除对角线
$$


#### 2.6 元素省略
```
  1|$$
  2|\begin{pmatrix}
  3|1&a_1&a_1^2&\cdots&a_1^n\\
  4|1&a_2&a_2^2&\cdots&a_2^n\\
  5|\vdots&\vdots&\vdots&\ddots&\vdots\\
  6|1&a_m&a_m^2&\cdots&a_m^n\\
  7|\end{pmatrix}
  8|$$
```
$$
\begin{pmatrix}
 1&a_1&a_1^2&\cdots&a_1^n\\
  1&a_2&a_2^2&\cdots&a_2^n\\
 \vdots&\vdots&\vdots&\ddots&\vdots\\
 1&a_m&a_m^2&\cdots&a_m^n\\
  \end{pmatrix}
$$
***
```
  1|\begin{matrix}
  2|a & b \\
  3|c & d \\
  4|\end{matrix}
```
$$
  \begin{matrix}
  a & b \\
  c & d \\
  \end{matrix}
$$
***
```
  1|\begin{pmatrix}
  2|a & b \\
  3|\ & d \\
  4|\end{pmatrix}
```
$$
  \begin{pmatrix}
  a & b \\
  \ & d \\
  \end{pmatrix}
$$
- 省略部分直接空置 \ 即可
- 也可以什么都不写
***
```
  1|\begin{bmatrix}
  2|a & b \\
  3|c & d \\
  4|\end{bmatrix}
```
$$
  \begin{bmatrix}
  a & b \\
  c & d \\
  \end{bmatrix}
$$
***
```
  1|\begin{vmatrix}
  2|a & b \\
  3|c & d \\
  4|\end{vmatrix}
```
$$
  \begin{vmatrix}
  a & b \\
  c & d \\
  \end{vmatrix}
$$
***
```
  1|\begin{Vmatrix}
  2|a & b \\
  3|c & d \\
  4|\end{Vmatrix}
```
$$
  \begin{Vmatrix}
  a & b \\
  c & d \\
  \end{Vmatrix}
$$
- [ ] 单行の行内取模长

输入|显示
-|-
\abs{xyz}|$\abs{xyz}$
\norm{xyz}|$\norm{xyz}$
 - 需要调用*physics*宏包
 - 或者直接加两条竖线"||"
***
#### 2.64 自定义 \iddots

> 这是高级用法 2024/12.24
>
> 按照Celeio的说法, 他"这么多年从没用过这个省略号". 
>
> 算上\raise和\lower, 我调了约80~90次. orz
>
> [Latex 合成字法在 typora 中实现 iddots - 知乎](https://zhuanlan.zhihu.com/p/14279913450)

```
\newcommand{\iddots}{\hbox{$
\kern0.03pt\lower0.9pt\cdot
\kern-0.52pt\raise2.1pt\cdot
\kern-0.55pt\raise5.1pt\cdot
$}}
\begin{bmatrix}
A & \cdots & B & \cdots & C\\
\vdots&\ddots & \vdots & \iddots & \vdots\\
E& \cdots & F & \cdots &G \\
\vdots & \iddots & \vdots & \ddots & \vdots\\
H & \cdots & I & \cdots & J
\end{bmatrix}
```

$$
\newcommand{\iddots}{\hbox{$
\kern0.03pt\lower0.9pt\cdot
\kern-0.52pt\raise2.1pt\cdot
\kern-0.55pt\raise5.1pt\cdot
$}}
\begin{bmatrix}
A & \cdots & B & \cdots & C\\
\vdots&\ddots & \vdots & \iddots & \vdots\\
E& \cdots & F & \cdots &G \\
\vdots & \iddots & \vdots & \ddots & \vdots\\
H & \cdots & I & \cdots & J
\end{bmatrix}
$$

- lower和raise是上下移动, 三个点的移动是无关的, 调起来容易.
- kern是左右移动, 在一个hbox里动一个点, 另外两个点也会跟着动, 规律是"一个往左, 其它往右; 一个往右, 其它往左". kern数值越小越往左, 越大越往右.

***
#### 2.65 行列式和长等号
*aligned*环境内嵌套*vmatrix*环境
```
\begin{aligned}
&\begin{vmatrix}
1&2&3&4\\
1&4&4&5\\
2&4&2&2\\
2&4&5&5\\
\end{vmatrix}
\xlongequal[]{\substack{r_2-r_1 \\r_3-2r_1 \\r_4-2r_1 }}
\begin{vmatrix}
1&2&3&4\\
0&2&1&1\\
0&0&-4&-6\\
0&0&-1&-3\\
\end{vmatrix} =1\times (-1)^{1+1}\times 
\begin{vmatrix}
2&1&1\\
0&-4&-6\\
0&-1&-3\\
\end{vmatrix}\\
&=2\times (-1)^{1+1}\times
\begin{vmatrix}
-4&-6\\
-1&-3\\
\end{vmatrix} = 2\times(12-6) = 12
\end{aligned}\tag{hty}
```
$$
\begin{aligned}
&\begin{vmatrix}
1&2&3&4\\
1&4&4&5\\
2&4&2&2\\
2&4&5&5\\
\end{vmatrix}
\xlongequal[]{\substack{r_2-r_1 \\r_3-2r_1 \\r_4-2r_1 }}
\begin{vmatrix}
1&2&3&4\\
0&2&1&1\\
0&0&-4&-6\\
0&0&-1&-3\\
\end{vmatrix} =1\times (-1)^{1+1}\times 
\begin{vmatrix}
2&1&1\\
0&-4&-6\\
0&-1&-3\\
\end{vmatrix}\\
&=2\times (-1)^{1+1}\times
\begin{vmatrix}
-4&-6\\
-1&-3\\
\end{vmatrix} = 2\times(12-6) = 12
\end{aligned}\tag{1-1}
$$

- 在\begin{vmatrix}前加入&, 与后面换行等号对齐. 
- \xlongequal[]{}格式内可以嵌入\substack堆叠, 并用换行符来换行. 
- ==这是在研究小徒弟<线代>作业转markdown时, 学到的.== 

#### 2.66 稀疏矩阵
```
\begin{bmatrix}
&&&\blacksquare&\\
&&&&\\
&&&&\\
&&&&\\
&&\blacksquare&&\\
\end{bmatrix}
```
$$
\begin{bmatrix}
&&&\blacksquare&\\
&&&&\\
&&&&\\
&&&&\\
&&\blacksquare&&\\
\end{bmatrix}_{5\times5}
$$

- 稀疏矩阵的一种示意图. 
- 在研究Arnoldi过程的子类, Lanczos过程时, 会对Krylov子空间对角化, 即 
$$
\kappa_m(\mathbf{A},\mathbf{r}_0)
=\mathrm{span}\{ \mathbf{r}_0,\mathbf{A}\mathbf{r}_0,\mathbf{A}^2\mathbf{r}_0,\cdots,\mathbf{A}^{m-1}\mathbf{r}_0 \}\\
\mathbf{r}_0=\mathbf{b}-\mathbf{A}\mathbf{x}_0\tag{4-2}
$$
 其中$\mathbf{r}_0$是试探向量. 

#### 2.7 增广矩阵
```
  1|$$
  2|\left[ \begin{array} {c c | c} %这里的c表示数组中元素的对齐方式：c居中、r右对齐、l左对齐，竖线表示2、3列间插入竖线
  3|1&2&3\\
  4|\hline %插入横线，如果去掉\hline就是增广矩阵
  5|4&5&6
  6|\end{array} \right]
  7|$$
```
$$
  \left[ \begin{array} {c c | c} %这里的c表示数组中元素的对齐方式：c居中、r右对齐、l左对齐，竖线表示2、3列间插入竖线
  1&2&3\\
  \hline %插入横线，如果去掉\hline就是增广矩阵
  4&5&6
  \end{array} \right]
$$
  又如，
$$
  \left[ \begin{array} {c c : c} 
  1&2&3\\
  \hdashline %插入横线
  4&5&6
  \end{array} \right]
$$
#### 2.8 公式标记
```
  1|$$a=x^2-y^2 \tag{1} \label{1}$$
```
$$ a=x^2-y^2 \tag{123} $$
```
KaTeX不支持\label 但Latex可以用\label
这与md局域标签有关，无法交叉引用
```
#### 2.85 长公式标记

```
  1|$$
  2|\begin{equation}
  3|z = (a+b)^4= a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4
  4|\end{equation}
  5|$$
```
$$
  \begin{equation}
  z = (a+b)^4= a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4
  \end{equation}
$$
***
```
  1|$$
  2|\begin{equation*}
  3|z = (a+b)^4= a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4
  4|\end{equation*}
  5|$$
```
$$
  \begin{equation*}
  z = (a+b)^4= a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4
  \end{equation*}
$$
***
```
  1|$$
  2|\begin{align}
  3|z &= (A+B)*(C+D)  \\
  4|&= A*(C+D) + B*(C+D)  \\
  5|&= A*C + A*D + B*C + B*D
  6|\end{align}
  7|$$
```
$$
\begin{align}
z &= (A+B)*(C+D)		\\
&= A*(C+D) + B*(C+D)		\\
&= A*C + A*D + B*C + B*D		
\end{align}
$$

$$
\begin{align}
z &= (A+B)*(C+D)		\\
&= A*(C+D) + B*(C+D)		\\
&= A*C + A*D + B*C + B*D		
\end{align}
$$
> 编号在\equation和\align环境下会被继承, 至于如何设置跟随章节的编号, 这个可以问Celeio. 
***
```
  1|$$
  2|\begin{align}
  3|\sqrt{37} &= \sqrt{\frac{73^2-1}{12^2}} &\text{方程式注释} \tag{123-4e} \\
  4|&= \sqrt{\frac{73^2}{12^2}\cdot\frac{73^2-1}{73^2}} \tag{2} \\
  5|&= \sqrt{\frac{73^2}{12^2}}\cdot\sqrt{\frac{73^2-1}{73^2}} \tag{} \\
  6|&= \frac{73}{12}\sqrt{1-\frac{1}{73^2}} \tag4 \\
  7|& \approx \frac{73}{12}\left(1-\frac{1}{2\cdot 73^2}\right) \tag 5 
  8|\end{align}
  9|$$
```
$$
\begin{align}
    \sqrt{37} &= \sqrt{\frac{73^2-1}{12^2}} &\text{方程式注释} \tag{123-4e} \\
    &= \sqrt{\frac{73^2}{12^2}\cdot\frac{73^2-1}{73^2}} \tag{2} \\
    &= \sqrt{\frac{73^2}{12^2}}\cdot\sqrt{\frac{73^2-1}{73^2}} \tag{} \\
    &= \frac{73}{12}\sqrt{1-\frac{1}{73^2}} \tag4 \\
    & \approx \frac{73}{12}\left(1-\frac{1}{2\cdot 73^2}\right) \tag 5 
\end{align}
$$

- Katex不支持多行对齐公式的multiple \tag{}, 但Typora支持. 
- 注意在处理多行\tag时, Typora遵循<*正则表达式*>[Celeio笔记](https://mp.weixin.qq.com/s/lTJ7TWz6uKgBVp5CWU518Q)
 因此尽量写成 \tag{} 

***
```
  1|$$
  2|\begin{align}
  3|\sqrt{37} &= \sqrt{\frac{73^2-1}{12^2}} &\text{方程式注释} \tag{123-4e} \\
  4|&= \sqrt{\frac{73^2}{12^2}\cdot\frac{73^2-1}{73^2}}  \\
  5|&= \sqrt{\frac{73^2}{12^2}}\cdot\sqrt{\frac{73^2-1}{73^2}}  \\
  6|&= \frac{73}{12}\sqrt{1-\frac{1}{73^2}}  \\
  7|& \approx \frac{73}{12}\left(1-\frac{1}{2\cdot 73^2}\right).
  8|\end{align}
  9|$$
```
$$
\begin{align}
    \sqrt{37} &= \sqrt{\frac{73^2-1}{12^2}} &\text{方程式注释} \tag{123-4e} \\
    &= \sqrt{\frac{73^2}{12^2}\cdot\frac{73^2-1}{73^2}}  \\
    &= \sqrt{\frac{73^2}{12^2}}\cdot\sqrt{\frac{73^2-1}{73^2}}  \\
    &= \frac{73}{12}\sqrt{1-\frac{1}{73^2}}  \\
    & \approx \frac{73}{12}\left(1-\frac{1}{2\cdot 73^2}\right) .
\end{align}
$$

- Katex可且只可识别0个或1个\tag{} 标签, 若存在1个标签, 则多行公式被整体标记为\tag{} 中的内容


#### 2.86 长公式左对齐
\> **第1种**
```
\int_{\mathbb R}\hfill\\
=\frac{Y}{Z}+P
```
$$
\int_{\mathbb R}\hfill\\
=\frac{Y}{Z}+P
$$

- Katex无法识别 \hfill 和 \dd , 所以请用Typora打开

***
\> **第2种**  
```
\begin{aligned}  
&\int_{\mathbb R}\\  
&=\frac{Y}{Z}+P  
\end{aligned}
```
$$
\begin{aligned}  
&\int_{\mathbb R}\\  
&=\frac{Y}{Z}+P  
\end{aligned}
$$

==一般使用第2种==, 第2种是align环境

#### 2.87 多行公式大括号

\> **第1种** 

```
f(x)=
\left\{
\begin{aligned}
& 0 \\
& 1 \\
\end{aligned}
\right.
```

$$
f(x)=
\left\{
\begin{aligned}
& 0 \\
& 1 \\
\end{aligned}
\right.
$$

基本方法就是\left \right中间夹一组aligned, ==注意\right的右边紧跟着一个点 "." 别漏了==.

***

\> **第2种** 

```
F(x)=
\left\{
\begin{aligned}
& \{ (t,xt)|t\in [0,1] \} , & x&为无理数\\
& \{ (t,0)|t\in [0,1] \} , & x&为有理数 ,且x\neq 0\\
& \{ (1,0) \} , & x&=0
\end{aligned}
\right.
```

$$
F(x)=
\left\{
\begin{aligned}
& \{ (t,xt)|t\in [0,1] \} , & x&为无理数\\
& \{ (t,0)|t\in [0,1] \} , & x&为有理数 ,且x\neq 0\\
& \{ (1,0) \} , & x&=0
\end{aligned}
\right.
$$

基本方法就是利用符号 \& 锁定需要对齐的单元格, 比如上式中的 $x$ 字符.

#### 2.9 希腊字母表
|输入|显示|输入|显示|输入|显示|
|:-:|:-:|:-:|:-:|:-:|:-:|
|\alpha|$$\alpha$$|\beta |$$\beta$$|\gamma |$$\gamma$$|
|\Gamma|$$\Gamma$$|\delta |$$\delta$$|\Delta |$$\Delta$$|
|\epsilon|$$\epsilon$$|\zeta |$$\zeta$$|\eta |$$\eta$$|
|\theta|$$\theta$$|\Theta |$$\Theta$$|\iota |$$\iota$$|
|\kappa|$$\kappa$$|\lambda |$$\lambda$$|\Lambda |$$\Lambda$$|
|\mu|$$\mu$$|\nu |$$\nu$$|\xi |$$\xi$$|
|\Xi|$$\Xi$$|\pi |$$\pi$$|\Pi |$$\Pi$$|
|\rho|$$\rho$$|\sigma |$$\sigma$$|\Sigma |$$\Sigma$$|
|\tau |$$\tau$$|\upsilon|$$\upsilon$$|\phi |$$\phi$$|
|\Phi |$$\Phi$$|\chi|$$\chi$$|\Chi |$$\Chi$$|
|\psi |$$\psi$$|\Psi|$$\Psi$$|\omega |$$\omega$$|
|\Omega |$$\Omega$$|\Omicron |$$\Omicron$$|
```
\epsilon读阿普希龙 \upsilon读伊普希龙
除了\xi的i读伊，其他希腊字母的i都读埃
```
|小写形式|大写形式|变量形式|显示|
|-|-|-|-|
|\epsilon||\varepsilon|$$\varepsilon$$|
|\theta||\vartheta|$$\vartheta$$|
|\rho||\varrho|$$\varrho$$|
|\sigma||\varsigma|$$\varsigma$$|
|\phi||\varphi|$$\varphi$$|
|||\ell|$\ell$|

#### 2.10 运算符
##### 2.10.1 关系运算符
输入|显示|输入|显示
:-:|:-:|:-:|:-:
\pm|$$\pm$$|\mp|$\mp$
\times|$$\times$$|\ltimes|$\ltimes$
\div|$$\div$$|\mid|$$\mid$$
\nmid|$$\nmid$$|\cdot|$$\cdot$$
\circ|$$\circ$$|\bullet|$\bullet$
\diamond|$\diamond$||
\ast|$$\ast$$|\star|$\star$
\square|$\square$|\blacksquare|$\blacksquare$
\bigodot|$$\bigodot$$|\bigotimes|$$\bigotimes$$
\bigoplus|$$\bigoplus$$|\leq|$$\leq$$
\geq|$$\geq$$|\neq|$$\neq$$
\succ|$\succ$|\succeq|$\succeq$
\prec|$\prec$|\preceq|$\preceq$
\approx|$$\approx$$|\equiv|$$\equiv$$
\sum|$$\sum$$|\prod|$$\prod$$
\coprod|$$\coprod$$||
\setminus|$\setminus$|\backslash|$\backslash$
\sim|$$\sim$$|\simeq|$$\simeq$$
\cong|$\cong$||
\dagger|$\dagger$|\ddagger|$\ddagger$
\clubsuit|$\clubsuit$|\heartsuit|$\heartsuit$
\intercal|$\intercal$||
\top|$\top$|\bot|$\bot$

- 行内版本\sum
```
  1|$\sum\limits_{i=1}^{N}{a_i}$
```
行内公式 $\sum\limits_{i=1}^{N}{a_i}$ 可以

- 省略号\dots

\dots|\ldots|\cdots|
:-:|:-:|:-:|
$\dots$|$\ldots$|$\cdots$|

Celeio说, **\dots是"系统自动适应"**, 他更喜欢全部都用\cdots, 并且中文的省略号按规范是要居中. 他建议省事全用\dots.

##### 2.10.2 集合元素符
输入|显示|输入|显示|输入|显示
:-:|:-:|:-:|:-:|:-:|:-:
\emptyset|$$\emptyset$$|\in|$$\in$$|\notin|$$\notin$$
\varnothing|$\varnothing$|\ni|$\ni$|\owns|$\owns$
\subset|$$\subset$$|\supset|$$\supset$$|\subseteq|$$\subseteq$$
\supseteq|$$\supseteq$$|\bigcap|$$\bigcap$$|\bigcup|$$\bigcup$$
\bigvee|$$\bigvee$$|\bigwedge|$$\bigwedge$$|biguplus|$$\biguplus$$
\wedge|$$\wedge$$|\vee|$$\vee$$||
\cap|$$\cap$$|\cup|$$\cup$$||
\sqcap|$\sqcap$|\sqcup|$\sqcup$||
\otimes|$$\otimes$$|\oplus|$$\oplus$$|\ominus|$$\ominus$$
\hat\otimes|$\hat\otimes$|\hat\oplus|$\hat\oplus$||
\amalg|$\amalg$|\int^\oplus|$\int^\oplus$||

**更多的公式请见**[在线LaTeX公式编辑器][id 2]

##### 2.10.3 对数运算符
输入|显示|输入|显示|输入|显示
:-:|:-:|:-:|:-:|:-:|:-:|
\log|$$\log$$|\lg|$$\lg$$|\ln|$$\ln$$

##### 2.10.4 三角运算符
输入|显示|输入|显示|输入|显示
:-:|:-:|:-:|:-:|:-:|:-:|
30^\circ|$$30^\circ$$|\bot|$$\bot$$|\angle ACB|$$\angle ACB$$
\sin x|$$\sin x$$|\cos y|$$\cos y$$|\tan|$$\tan$$
\csc|$$\csc$$|\sec|$$\sec$$|\cot|$$\cot$$

##### 2.10.5 微积分运算符
输入|显示|输入|显示|输入|显示
:-:|:-:|:-:|:-:|:-:|:-:
\int|$\int$|\iint|$\iint$|\iiint|$\iiint$
\iiiint|$\iiiint$|\oint|$\oint$|\oiint|$\oiint$
\lim|$\lim$|\infty|$\infty$||
\partial|$\partial$|\nabla|$\nabla$||
'||\prime|$\prime$|^{\prime}|$^{\prime}$
\Im|$\Im$|\aleph|$\aleph$|\wp|$\wp$
\Re|$\Re$|\inf|$\inf$|\sup|$\sup$
```
  1| $\lim_{x \to 0}$
```
$\lim_{x \to 0}$
```
  2| $$\lim_{x \to 0}$$
```
$$\lim_{x \to 0}$$
```
  3| $$\dd$$
```
$$\dd$$


- 这个\dd只有在physics宏包中才有，一般写latex时会调用。typora就可以显示。

##### 2.10.6 逻辑运算符
输入|显示|输入|显示|输入|显示
:-:|:-:|:-:|:-:|:-:|:-:
\because|$\because$|\therefore|$\therefore$|\text{ s.t. }|$\text{ s.t. }$
\forall|$\forall$|\exists|$\exists$|\not\subset|$\not\subset$
\not<|$\not<$|\not>|$\not>$|\not=|$\not=$

##### 2.10.7 带帽符号
输入|显示|输入|显示
:-:|:-:|:-:|:-:
\hat{xy}|$\hat{xy}$|\widehat{xyz}|$\widehat{xyz}$
\tilde{xy}|$\tilde{xy}$|\widetilde{xyz}|$\widetilde{xyz}$
\check{x}|$\check{x}$|\breve{y}|$\breve{y}$
\grave{x}|$\grave{x}$|\acute{y}|$\acute{y}$
\dot{x}|$\dot{x}$|\ddot{x}|$\ddot{x}$
\bar{x}|$\bar{x}$|\vec{x}|$\vec{x}$

输入|显示
:-:|:-:
\rm caf\acute{\rm e}|$\rm caf\acute{\rm e}$
\hbar|$\hbar$

##### 2.10.8 连线符号
输入|显示|注释
:-:|:-:|:-:
\fbox{a+b+c+d}|$\fbox{a+b+c+d}$ |#方权图
\overleftarrow{a+b+c+d}|$\overleftarrow{a+b+c+d}$ 
\overrightarrow{XY}|$\overrightarrow{XY}$ |#矢量
\overleftrightarrow{M}|$\overleftrightarrow{M}$ |只有这种
\underleftarrow{a+b+c}|$\underleftarrow{a+b+c}$
\underrightarrow{c+d+e}|$\underrightarrow{c+d+e}$
\underleftrightarrow{a+c+d+e}|$\underleftrightarrow{a+c+d+e}$
\overline{\lim_{x \to +0}}x^2|$$\overline{\lim_{x \to +0}}x^2$$ |凑合用
\underline{a+b+c+d}|$\underline{a+b+c+d}$
\overbrace{a+b+c+d}^{sample}|$\overbrace{a+b+c+d}^{sample}$ |数列
\underbrace{a+b+c+d}_{sample}|$\underbrace{a+b+c+d}_{sample}$ 
\overbrace{a+\underbrace{b+c}<br>_{1.0}+d}^{2.0}|$\overbrace{a+\underbrace{b+c}_{1.0}+d}^{2.0}$
\underbrace{a\cdot a\cdots a}_{b \text{times}}|$\underbrace{a\cdot a\cdots a}_{b \text{times}}$


- 注意，\overbrace对应 ^{}  \underbrace对应 _{} 
- \<br>是"回车"（换行）的意思


***
---
### 3.1特殊符号
- [ ] 摄氏度
1. $\textcelsius$
2. $^{\circ}$C
```
摄氏度需要调用宏包
\usepackage{textcomp} typora可以显示
```
***
- [ ] 虚数与指数

> 虚数 i 要使用正体 $\mathrm{i}$
> 指数 exp 要使用正体 $\mathrm{e}$
```
  1| $\mathrm{e}^{\mathrm{i}m\phi}$
```
$$
Y^{m}_{l}(\widehat{\boldsymbol{\mathrm{r}}})=Y^{m}_{l}(\theta,\phi)=A_{l,m}P^{m}_{l}(\cos\theta)\mathrm{e}^{\mathrm{i}m\phi}
$$

- "国际标准是这样的" - Celeio
***
- [ ] 实部与虚部 vs. 核与像

> 实部 \Re, 虚部 \Im
>
> 核 \ker, 像 \image
>
> > 应当注意, typora里, 映射的像"Im"与虚部"Im"长得一模一样. 在不引起歧义的情况下, 可以正常使用. 

```
  1| $\Re(z),\Im(z);\quad \ker\mathscr{A},\image\mathscr{A}$
```

$$
\Re(z),\Im(z);\quad \ker\mathscr{A},\image\mathscr{A}
$$

- Celeio说, 像可以用im, 也可以Img, 或者image, 或者改用值域Ran或者ran, 或者range, 和ker保持一致. 你用Ker，那就Im.

***
- [ ] 波函数

```
  1| $$\left \langle \psi \right |$$
```
$$\left \langle \psi \right |$$
```
  2| $$\left | \psi \right \rangle$$
```
$$\left | \psi \right \rangle$$
```
  3| $$\left \langle \psi_i | \psi_j \right \rangle$$
```
$$\left \langle \psi_i | \psi_j \right \rangle$$
```
  4| $$\mathinner{\langle{ab,|,,cd}\rangle}$$
```
$$\mathinner{\langle{ab,|,,cd}\rangle}$$
- 行内版本 

第3种|第4种
-|-
$\left \langle \phi,\rho^{(1)}\psi \right \rangle$|$\mathinner{\langle{\phi,\rho^{(1)}\psi}\rangle}$
- 行间版本

第3种|第4种
-|-
$$\left \langle \phi,\rho^{(1)}\psi \right \rangle$$|$$\mathinner{\langle{\phi,\rho^{(1)}\psi}\rangle}$$

第3种和第4种应当稍作区分, ==一般使用第4种==, \mathinner也是*braket*宏包的原型
```
  5| $$\bra{a} \quad and \quad \ket{b} \quad and \quad \braket{a,,|,b}$$
  6| $$\braket{\phi}{\psi} \quad and \quad \ketbra{\psi}{\phi}$$
```
$$\bra{a} \quad and \quad \ket{b} \quad and \quad \braket{a,,|,b}$$
$$\braket{\phi}{\psi} \quad and \quad \ketbra{\psi}{\phi}$$
> Typora和StackEdit对于\braket的解释不同. 个人推荐第4种写法. 
> 对于\ketbra{}{}. 需要调用*physics_braket*宏包. 
***
- [ ] 各种括号

输入|显示|输入|显示
-|-|-|-
\left(X\right)|$\left(X\right)$|\left[X\right]|$\left[X\right]$
\left\langle X\right\rangle|$\left\langle X\right\rangle$|\left\\{X\right\\}|$\left\{X\right\}$
\lfloor X \rfloor|$\lfloor X \rfloor$|\lceil X \rceil|$\lceil X \rceil$
\big( X \big)|$\big( X \big)$||
\Big( X \Big)|$\Big( X \Big)$||
\sin (\frac{\pi}{10})|$\sin (\frac{\pi}{10})$|\sin (\cfrac{\pi}{10})|$\sin (\cfrac{\pi}{10})$

> \left | \right | 

$$\left | \right |$$

> \left \\| \right \\| 

$$\left \| \right \|$$

**更多的括号写法请见**[大括号、上下括号 - 知乎][id 3]
***
- [ ] 函数区间、定义域、值域
```
  1| $$\left [ 0,1 \right )$$
```
$$\left [ 0,1 \right )$$
```
  2| $$f: X \to Y$$
```
$$f: X \to Y$$
```
  3| $$x \mapsto f(x)$$
```
$$x \mapsto f(x)$$
输入|显示|输入|显示
-|-|-|-
\to|$\to$|\gets|$\gets$
\mapsto|$\mapsto$|\longmapsto|$\longmapsto$
\Leftarrow|$\Leftarrow$|\Rightarrow|$\Rightarrow$
\iff|$\iff$|\nrightarrow|$\nrightarrow$
\dashrightarrow|$\dashrightarrow$|\hookrightarrow|$\hookrightarrow$
\twoheadrightarrow|$\twoheadrightarrow$||
***
- [ ] 化学式
```
  1|$\ce{N2(g) + 3H2(g) <=>[催化剂][高温高压] 2NH3(g) \Delta H = -92.4 kJ/mol}$
```
$\ce{N2(g) + 3H2(g) <=>[催化剂][高温高压] 2NH3(g) \Delta H = -92.4 kJ/mol}$ 
***
- [ ] 符号上下堆叠
```
  1|$$\mathop{}\limits_{}^{}$$
```
$$
V/\mathrm{ker}(\phi)\mathop{\dashrightarrow} \limits_{\exists!\overline{\phi}}^{\sim}{\operatorname{im}(\phi)}
$$
==对于category中经常出现的箭图和交换图, 一般调用
\xymatrix{}封装, 涉及mathjax扩展==. *typora*可以, 但*Stackedit*的Katex目前不行. 

***
- [ ] 交换图
```
$$
\begin{equation*}
\begin{CD}
V_1 @>{\mathscr{A}}>> V_2\\
@V{\mathscr{I_1}}VV @VV{\mathscr{I_2}}V\\
F^{(n)} @>{A}>> F^{(m)}
\end{CD}
\end{equation*}
$$
```
$$
\begin{equation*}
\begin{CD}
V_1 @>{\mathscr{A}}>> V_2\\
@V{\mathscr{I_1}}VV @VV{\mathscr{I_2}}V\\
F^{(n)} @>{A}>> F^{(m)}
\end{CD}
\end{equation*}
$$
*Stackedit*的Katex支持CD环境, 通过\begin{CD}调用amscd package (American Mathematical Society)来使用简单的交换图. 知乎上目前(2023.2.14)在"公式"里写交换图, 需要在\begin{equation*}前面加一行\quad, 确保左边显示正常.

- 这里有一篇2017年6月的博客, 介绍latex可用于交换图的包 [LaTeX で可換図式を描くパッケージ各種 | 雑記帳 (miz-ar.info)](https://blog.miz-ar.info/2017/06/commutative-diagrams-in-latex/). 
- 关于tikz-cd交换图包, 有个在线编辑网站 [tikzcd-editor (yichuanshen.de)](https://tikzcd.yichuanshen.de/). 
- 关于tikz-cd交换图包, 有另一个在线编辑网站 [Mathcha - Online Math Editor](https://www.mathcha.io/) 
- 关于xy-matrix交换图包, 有个说明书网站 [Mxymatrix.pdf (jmilne.org)](https://www.jmilne.org/not/Mxymatrix.pdf)
- 关于ams-cd交换图包, 有个说明书网站 [Mamscd.pdf (jmilne.org)](https://www.jmilne.org/not/Mamscd.pdf)



***
- [ ] xy-matrix交换图

- 张量积

```
$$
\xymatrix{
\ker{\varphi}\otimes\ker{\psi} 
\ar[r]^{\mathfrak{i}\otimes\mathrm{id}} 
\ar[d]|-{\mathrm{id}\otimes\mathfrak{j}}&
V\otimes\ker{\psi} 
\ar[r]^{\varphi\otimes\mathrm{id}} 
\ar[d]|-{\mathrm{id}\otimes\mathfrak{j}}&
N\otimes\ker{\psi} 
\ar[r]
\ar[d]|-{\mathrm{id}\otimes\mathfrak{j}}&
0\\
\ker{\varphi}\otimes W 
\ar[r]^{\mathfrak{i}\otimes\mathrm{id}} 
\ar[d]|-{\mathrm{id}\otimes\psi}&
V\otimes W
\ar[r]^{\varphi\otimes\mathrm{id}} 
\ar[d]|-{\mathrm{id}\otimes\psi}
\ar[rd]|-{\varphi\otimes\psi}&
N\otimes W 
\ar[r]
\ar[d]|-{\mathrm{id}\otimes\psi}&
0\\
\ker{\varphi}\otimes M 
\ar[r]^{\mathfrak{i}\otimes\mathrm{id}} 
\ar[d]&
V\otimes M
\ar[r]^{\varphi\otimes\mathrm{id}} 
\ar[d]&
N\otimes M
\ar[r]
\ar[d]&
0\\
0&0&0
}
$$
```
$$
\xymatrix{
\ker{\varphi}\otimes\ker{\psi} 
\ar[r]^{\mathfrak{i}\otimes\mathrm{id}} 
\ar[d]|-{\mathrm{id}\otimes\mathfrak{j}}&
V\otimes\ker{\psi} 
\ar[r]^{\varphi\otimes\mathrm{id}} 
\ar[d]|-{\mathrm{id}\otimes\mathfrak{j}}&
N\otimes\ker{\psi} 
\ar[r]
\ar[d]|-{\mathrm{id}\otimes\mathfrak{j}}&
0\\
\ker{\varphi}\otimes W 
\ar[r]^{\mathfrak{i}\otimes\mathrm{id}} 
\ar[d]|-{\mathrm{id}\otimes\psi}&
V\otimes W
\ar[r]^{\varphi\otimes\mathrm{id}} 
\ar[d]|-{\mathrm{id}\otimes\psi}
\ar[rd]|-{\varphi\otimes\psi}&
N\otimes W 
\ar[r]
\ar[d]|-{\mathrm{id}\otimes\psi}&
0\\
\ker{\varphi}\otimes M 
\ar[r]^{\mathfrak{i}\otimes\mathrm{id}} 
\ar[d]&
V\otimes M
\ar[r]^{\varphi\otimes\mathrm{id}} 
\ar[d]&
N\otimes M
\ar[r]
\ar[d]&
0\\
0&0&0
}
$$



- 辫子群和射影特殊线性群

```
$$
\xymatrix@R=0.5pc@C=2pc{
&B_3 \ar@{->>}[r] \ar@{^{(}->}[dd] &
PSL_2(\mathbf{Z}) \ar@{^{(}->}[dd]\\
\mathbf{Z} \ar@{_{(}->}@/^/[ru] \ar@/_/@{^{(}->}[rd]\\
&\overline{SL_2(\mathbf{R})} \ar@{->>}[r] &
PSL_2(\mathbf{R})
}
$$
```

$$
\xymatrix@R=0.5pc@C=2pc{
&B_3 \ar@{->>}[r] \ar@{^{(}->}[dd] &
PSL_2(\mathbf{Z}) \ar@{^{(}->}[dd]\\
\mathbf{Z} \ar@{_{(}->}@/^/[ru] \ar@/_/@{^{(}->}[rd]\\
&\overline{SL_2(\mathbf{R})} \ar@{->>}[r] &
PSL_2(\mathbf{R})
}
$$



- 复球谐函数坐标系和实球谐函数坐标系之间的过渡矩阵

```
$$
\xymatrix@R=0.5pc@C=2pc{
&
V_l|_{\mathbb{S}^2} \ar[r]^{\hat{O}} \ar[ddd]_{\mathscr{I_1}} & 
V_l|_{\mathbb{S}^2} \ar[ddd]_{\mathscr{I_2}}\\
\\
\\
&
F^{(l)}_{\text{(comp.)}} \ar[r]^{O} \ar[dd]_{\mathscr{T}^l}&
F^{(l)}_{\text{(comp.)}} \ar[dd]^{\mathscr{T}^l}\\
X\supset U\ \ar[ru]^{\varphi_{\text{complex}}} \ar[rd]_{\varphi_{\text{real}}}\\
&
F^{(l)}_{\text{(real)}} \ar[r]^{ T^l O (T^l)^\dagger }&
F^{(l)}_{\text{(real)}}
}
$$
```

$$
\xymatrix@R=0.5pc@C=2pc{
&
V_l|_{\mathbb{S}^2} \ar[r]^{\hat{O}} \ar[ddd]_{\mathscr{I_1}} & 
V_l|_{\mathbb{S}^2} \ar[ddd]_{\mathscr{I_2}}\\
\\
\\
&
F^{(l)}_{\text{(comp.)}} \ar[r]^{O} \ar[dd]_{\mathscr{T}^l}&
F^{(l)}_{\text{(comp.)}} \ar[dd]^{\mathscr{T}^l}\\
X\supset U\ \ar[ru]^{\varphi_{\text{complex}}} \ar[rd]_{\varphi_{\text{real}}}\\
&
F^{(l)}_{\text{(real)}} \ar[r]^{ T^l O (T^l)^\dagger }&
F^{(l)}_{\text{(real)}}
}
$$

> 通过拼接上面两个图, 我们得到了第三个图. 
>
> - \xymatrix "@R=0.5pc@C=2pc" 没有办法单独对某一层调整, 只能对全局做一次调整. 若要让下层扁, 但保持上层的高度不变, 只能**先把上层的 \ar[d] 改成 \ar[ddd], 即, 先把箭头弄长, 然后再一起缩放**.
> - 上图要求算子 $\hat{O}$ 是局域固定规范的, 不然右边的 $\mathscr{T}^l$ 就与左边的不同.



- 复球谐函数坐标系和实球谐函数坐标系之间的过渡矩阵(立体的版本)

$$
\xymatrix@R=1.2pc@C=1.5pc{

&
V_l|_{\mathbb{S}^2} \ar[rrr]^{\hat{O}} \ar[rd]|-{\mathscr{I}_1} \ar[dd]_{\mathscr{T}^l}
&

&&
V_l|_{\mathbb{S}^2} \ar[dd]^{\mathscr{T}^l} \ar[rd]|-{\mathscr{I}_2}
&

\\
X\supset U \ar[ru]^{\varphi_{\text{complex}}} \ar[rd]_{\varphi_{\text{real}}}
&

&
F^{(l)}_{\text{(comp.)}} \ar[rrr]^{O} \ar[dd]_{T^l}
&&

&
F^{(l)}_{\text{(comp.)}} \ar[dd]^{T^l}
\\

&
V_l|_{\mathbb{S}^2} \ar[rrr]^{ \mathscr{T}^l \hat{O} (\mathscr{T}^l)^{-1} } \ar[rd]|-{\mathscr{I}_3}
&

&&
V_l|_{\mathbb{S}^2} \ar[rd]|-{\mathscr{I}_4}
&

\\

&

&
F^{(l)}_{\text{(real)}} \ar[rrr]^{ T^l O (T^l)^\dagger }
&&

&
F^{(l)}_{\text{(real)}}
}
$$

> 画这种立体的有几个要点:
>
> - 在 iPad 上画长方体.
> - 打开网页 [tikzcd-editor](https://tikzcd.yichuanshen.de/) 画箭头, 确定**几行几列**, 应尽量避免十字交叉. 把图截下来, 放入notability. 在每个格子的==出线==上写"rr", "rd", "dd"等标记字样.
> - - 在typora上先打"\\\\"和"&"; 
>   - 然后按照格子所在第几行第几列把"\\ar[rr]", "\\ar[rd]"写上; 
>   - 然后依次填充每个格子的对象;
>   - 依次填充箭头;
>   - 调整长宽"@R=0.5pc@C=2pc".

- 证明这种立体图是否交换, 通常先证明每层交换, 每正面交换, 每侧面交换; 类似闸刀. 然后再拼起来.




***
- [ ] 旋量代数
```
  1| $$\binom{}{}$$
```
$$\binom{\chi_i}{\chi_j}$$
```
  2| $\chi^\uparrow$
```
$$\chi^\uparrow$$
```
  3| $\chi^\downarrow$
```
$$\chi^\downarrow$$
***
- [ ] 人名
> markdown版本在上面"2.10.7 带帽符号"已经写过

- 应当小心, 在markdown中, 法文德文标记符默认斜体(意大利体)位标记. ==因此如果要使用正体, 请将标记符整个放入\mathrm{}中, 即\mathrm{caf\acute{e}}.== 
$\mathrm{caf}\acute{\mathrm{e}}$
$\mathrm{caf\acute{e}}$
- Latex中则还有另一种标记方式; 在latex标题\section{}里只能使用latex的方案. \\"{o} 和 \\"{ o} 和 \\"o 等价, 但\\u{o}只能写\\u{o}. 
- Latex中, angstrom埃, 标准写法为\AA 或 \r{A}, 效果比表格中的要好.

|markdown|LaTeX|效果
|:-:|:-:|:-:
|\mathrm{\bar{o}}|\\=o|$\mathrm{\bar{o}}$
|\mathrm{\hat{o}}|\\^o|$\mathrm{\hat{o}}$
|\mathrm{\check{o}}||$\mathrm{\check{o}}$
|\mathrm{\acute{e}}|\\'e|$\mathrm{\acute{e}}$
|\mathrm{\grave{e}}|\\`e|$\mathrm{\grave{e}}$
|\mathrm{\dot{o}}|\\.o|$\mathrm{\dot{o}}$
|\mathrm{\ddot{o}}|\\"o|$\mathrm{\ddot{o}}$
|\mathrm{\breve{o}}|\\u{o}|$\mathrm{\breve{o}}$
|\mathrm{\tilde{o}}|\\~o|$\mathrm{\tilde{o}}$
|   |\\r{A}|$\mathrm{\mathop{A}\limits^{\circ}}$
|   |\\b{o}|

(pdf, xe, lua)LaTeX 正文**独有**特殊字母: 
\AA \aa 
\AE \ae \OE
\SS \ss
\IJ \ij \i \j
\L \l \O \o

(pdf, xe, lua)LaTeX 正文**俄文**特殊字母: 
```
% 导言区 \usepackage[OT2,OT1]{fontenc}
{\fontencoding{OT2}\selectfont XXX}

% 导言区 \usepackage[OT2,OT1]{fontenc}
{\fontencoding{OT2}\selectfont Grigopi\v{i}}
```

***
- [ ] 各种字体
```
  1|\mathbb{R}
```
$$\mathbb{R}$$
```
  2|\mathcal{M}
```
$$\mathcal{M}$$
```
  3|\mathrm{012...abc...ABC}
```
$$\mathrm{012...abc...ABC}$$
```
  4|\mathfrak{012...abc...ABCR}
```
$$\mathfrak{012...abc...ABCR}$$
```
  4‘|\mathbffrak{012...abc...ABCR}
```
$$\mathbffrak{012...abc...ABCR}$$
```
  5|\mathbf{012...abc...ABC}
```
$$\mathbf{012...abc...ABC}$$
```
  6|\mathscr{012...abc...ABC}
```
$$\mathscr{012...abc...ABC}$$
```
  7|\mathit{0123456789}
```
$$\mathit{0123456789}$$
```
  8|\mathsf{012...abc...ABC}
```
$$\mathsf{012...abc...ABC}$$
```
  9|\mathtt{012...abc...ABC}
```
$$\mathtt{012...abc...ABC}$$

***
- 特殊字体
```
  10|\pmb{012...abcxyz...ABCXYZ}
  通过复写字母实现加粗，因此放大后不美观 -Celeio
```
$$\pmb{012...abcxyz...ABCXYZ}$$
```
  11|\boldsymbol{012...abcxyz...ABCXYZ}
  与后一个效果一样，但这个某些字符无法加粗 -Celeio
```
$$\boldsymbol{012...abcxyz...ABCXYZ}$$
```
  12|\bm{012...abcxyz...ABCXYZ}
  与前一个效果一样，但要调bm包 -Celeio
```
<br>

- ==关于数学符号斜体印刷==见[知乎 - 向量a的加粗][id 4]

***
[id 2]:https://latexlive.com/## "在线LaTeX公式编辑器-编辑器"
[id 3]:https://zhuanlan.zhihu.com/p/265587702?utm_source=qq "如何用latex加大括号、上下括号等复杂操作？ - 知乎"
[id 4]:https://www.zhihu.com/question/372584965/answer/2423262793 "在LaTeX中，向量a应使用\mathbf{a}表示还是\boldsymbol{a}表示？"



***

## 色图

### 旧版

```
\color{gray}{text}
\color{silver}{text}
\color{blue}{text}
\color{yellow}{text}
\color{red}{text}
\color{lime}{text}
\color{green}{text}
\color{fuchsia}{text}
```

$$
\color{gray}{text}	\\
\color{silver}{text}\\
\color{blue}{text}	\\
\color{yellow}{text}\\
\color{red}{text}	\\
\color{lime}{text}	\\
\color{green}{text}	\\
\color{fuchsia}{text}\\
$$

***

### 新版

```
\color{#ffdddd}{text}
\color{#ff8888}{text}
\color{#ffaa11}{text}
\color{#ffccaa}{text}
\color{#ffdd66}{text}
\color{#ffbbee}{text}
\color{#aaaaff}{text}
\color{#7777ff}{text}
\color{#66ccff}{text}
\color{#99ccff}{text}
\color{#00eeff}{text}
\color{#bbffee}{text}
\color{#99ff99}{text}
\color{#44bb66}{text}
\color{#44ff77}{text}
\color{#0088ff}{text}
\color{#22cc88}{text}
\color{#777777}{text}
\color{#aaaaaa}{text}
\color{#f0f0f0}{text}
```

$$
\color{#ffdddd}{text}	\\
\color{#ff8888}{text}	\\
\color{#ffaa11}{text}	\\
\color{#ffccaa}{text}	\\
\color{#ffdd66}{text}	\\
\color{#ffbbee}{text}	\\
\color{#aaaaff}{text}	\\
\color{#7777ff}{text}	\\
\color{#66ccff}{text}	\\
\color{#99ccff}{text}	\\
\color{#00eeff}{text}	\\
\color{#bbffee}{text}	\\
\color{#99ff99}{text}	\\
\color{#44bb66}{text}	\\
\color{#44ff77}{text}	\\
\color{#0088ff}{text}	\\
\color{#22cc88}{text}	\\
\color{#777777}{text}	\\
\color{#aaaaaa}{text}	\\
\color{#f0f0f0}{text}	\\
$$

- 2025 年 1 月, 知乎用户弄了一个合集: [如何优雅地输入LaTeX公式 - 知乎](https://zhuanlan.zhihu.com/p/531591547) 

