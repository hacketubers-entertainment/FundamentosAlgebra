# Actividad #29 - Ejercicios: Sarrus y cofactores

---

### Ejercicio 21

**Sarrus:**

$$
\begin{matrix}
-6 & 0 & -3 \\
3 & 4 & -8 \\
10 & 7 & 11 \\
\hline
-6 & 0 & -3 \\
3 & 4 & -8
\end{matrix}
$$

- Bajan: $(-6)(4)(11) + (3)(7)(-3) + (10)(0)(-8) = -264 - 63 + 0 = -327$
- Suben: $(10)(4)(-3) + (-6)(7)(-8) + (3)(0)(11) = -120 + 336 + 0 = 216$
- Resta: $-327 - 216 = -543$

**Comprobación por cofactores:**

$$
\det = -6\begin{vmatrix}4 & -8\\ 7 & 11\end{vmatrix} - 0 + (-3)\begin{vmatrix}3 & 4\\ 10 & 7\end{vmatrix}
$$

$$
\det = -6(44 + 56) - 3(21 - 40) = -600 + 57 = -543
$$

**Resultado:** $-543$

---

### Ejercicio 22

**Sarrus:**

$$
\begin{matrix}
10 & -5 & 0 \\
7 & -2 & -1 \\
5 & -3 & 1 \\
\hline
10 & -5 & 0 \\
7 & -2 & -1
\end{matrix}
$$

- Bajan: $(10)(-2)(1) + (7)(-3)(0) + (5)(-5)(-1) = -20 + 0 + 25 = 5$
- Suben: $(5)(-2)(0) + (10)(-3)(-1) + (7)(-5)(1) = 0 + 30 - 35 = -5$
- Resta: $5 - (-5) = 10$

**Comprobación por cofactores:**

$$
\det = 10\begin{vmatrix}-2 & -1\\ -3 & 1\end{vmatrix} - (-5)\begin{vmatrix}7 & -1\\ 5 & 1\end{vmatrix} + 0
$$

$$
\det = 10(-2 - 3) + 5(7 + 5) = -50 + 60 = 10
$$

**Resultado:** $10$

---

### Ejercicio 23

**Sarrus:**

$$
\begin{matrix}
-9 & 11 & 5 \\
9 & 10 & 0 \\
-2 & 9 & 10 \\
\hline
-9 & 11 & 5 \\
9 & 10 & 0
\end{matrix}
$$

- Bajan: $(-9)(10)(10) + (9)(9)(5) + (-2)(11)(0) = -900 + 405 + 0 = -495$
- Suben: $(-2)(10)(5) + (-9)(9)(0) + (9)(11)(10) = -100 + 0 + 990 = 890$
- Resta: $-495 - 890 = -1385$

**Comprobación por cofactores (columna 3 porque tiene un 0):**

$$
\det = 5\begin{vmatrix}9 & 10\\ -2 & 9\end{vmatrix} - 0 + 10\begin{vmatrix}-9 & 11\\ 9 & 10\end{vmatrix}
$$

$$
\det = 5(81 + 20) + 10(-90 - 99) = 505 - 1890 = -1385
$$

**Resultado:** $-1385$

---

### Ejercicio 24

**Sarrus:**

$$
\begin{matrix}
5 & -7 & 12 \\
-11 & -5 & 7 \\
1 & 10 & 11 \\
\hline
5 & -7 & 12 \\
-11 & -5 & 7
\end{matrix}
$$

- Bajan: $(5)(-5)(11) + (-11)(10)(12) + (1)(-7)(7) = -275 - 1320 - 49 = -1644$
- Suben: $(1)(-5)(12) + (5)(10)(7) + (-11)(-7)(11) = -60 + 350 + 847 = 1137$
- Resta: $-1644 - 1137 = -2781$

**Comprobación por cofactores:**

$$
\det = 5\begin{vmatrix}-5 & 7\\ 10 & 11\end{vmatrix} - (-7)\begin{vmatrix}-11 & 7\\ 1 & 11\end{vmatrix} + 12\begin{vmatrix}-11 & -5\\ 1 & 10\end{vmatrix}
$$

$$
\det = 5(-55 - 70) + 7(-121 - 7) + 12(-110 + 5) = -625 - 896 - 1260 = -2781
$$

**Resultado:** $-2781$

---

### Ejercicio 25

**Sarrus:**

$$
\begin{matrix}
-8 & 5 & 11 \\
2 & 1 & 10 \\
2 & 12 & 4 \\
\hline
-8 & 5 & 11 \\
2 & 1 & 10
\end{matrix}
$$

- Bajan: $(-8)(1)(4) + (2)(12)(11) + (2)(5)(10) = -32 + 264 + 100 = 332$
- Suben: $(2)(1)(11) + (-8)(12)(10) + (2)(5)(4) = 22 - 960 + 40 = -898$
- Resta: $332 - (-898) = 1230$

**Comprobación por cofactores:**

$$
\det = -8\begin{vmatrix}1 & 10\\ 12 & 4\end{vmatrix} - 5\begin{vmatrix}2 & 10\\ 2 & 4\end{vmatrix} + 11\begin{vmatrix}2 & 1\\ 2 & 12\end{vmatrix}
$$

$$
\det = -8(4 - 120) - 5(8 - 20) + 11(24 - 2) = 928 + 60 + 242 = 1230
$$

**Resultado:** $1230$

---

### Ejercicio 26

**Sarrus:**

$$
\begin{matrix}
-7 & 8 & 2 \\
1 & -3 & 2 \\
0 & 4 & 1 \\
\hline
-7 & 8 & 2 \\
1 & -3 & 2
\end{matrix}
$$

- Bajan: $(-7)(-3)(1) + (1)(4)(2) + (0)(8)(2) = 21 + 8 + 0 = 29$
- Suben: $(0)(-3)(2) + (-7)(4)(2) + (1)(8)(1) = 0 - 56 + 8 = -48$
- Resta: $29 - (-48) = 77$

**Comprobación por cofactores:**

$$
\det = -7\begin{vmatrix}-3 & 2\\ 4 & 1\end{vmatrix} - 1\begin{vmatrix}8 & 2\\ 4 & 1\end{vmatrix} + 0
$$

$$
\det = -7(-3 - 8) - 1(8 - 8) = 77 - 0 = 77
$$

**Resultado:** $77$

---

### Ejercicio 27

**Sarrus:**

$$
\begin{matrix}
-6 & -4 & -11 \\
3 & -9 & 6 \\
-12 & 1 & -11 \\
\hline
-6 & -4 & -11 \\
3 & -9 & 6
\end{matrix}
$$

- Bajan: $(-6)(-9)(-11) + (3)(1)(-11) + (-12)(-4)(6) = -594 - 33 + 288 = -339$
- Suben: $(-12)(-9)(-11) + (-6)(1)(6) + (3)(-4)(-11) = -1188 - 36 + 132 = -1092$
- Resta: $-339 - (-1092) = 753$

**Comprobación por cofactores:**

$$
\det = -6\begin{vmatrix}-9 & 6\\ 1 & -11\end{vmatrix} - (-4)\begin{vmatrix}3 & 6\\ -12 & -11\end{vmatrix} + (-11)\begin{vmatrix}3 & -9\\ -12 & 1\end{vmatrix}
$$

$$
\det = -6(99 - 6) + 4(-33 + 72) - 11(3 - 108) = -558 + 156 + 1155 = 753
$$

**Resultado:** $753$

---

### Ejercicio 28

**Sarrus:**

$$
\begin{matrix}
0 & 12 & 3 \\
6 & 6 & -4 \\
-7 & -3 & -8 \\
\hline
0 & 12 & 3 \\
6 & 6 & -4
\end{matrix}
$$

- Bajan: $(0)(6)(-8) + (6)(-3)(3) + (-7)(12)(-4) = 0 - 54 + 336 = 282$
- Suben: $(-7)(6)(3) + (0)(-3)(-4) + (6)(12)(-8) = -126 + 0 - 576 = -702$
- Resta: $282 - (-702) = 984$

**Comprobación por cofactores:**

$$
\det = 0 - 12\begin{vmatrix}6 & -4\\ -7 & -8\end{vmatrix} + 3\begin{vmatrix}6 & 6\\ -7 & -3\end{vmatrix}
$$

$$
\det = -12(-48 - 28) + 3(-18 + 42) = 912 + 72 = 984
$$

**Resultado:** $984$

---

## Cofactores ($5 \times 5$)

### Ejercicio 29

Elijo el **renglón 4** porque tiene un cero ($a_{42} = 0$). Signos del renglón 4: $(-, +, -, +, -)$.

$$
\det = -4\,M_{41} + 0 - (-1)\,M_{43} + (-3)\,M_{44} - (-7)\,M_{45}
$$

Calculando los menores $4 \times 4$ (reduciendo a $3 \times 3$ y Sarrus):

- $M_{41} = \begin{vmatrix}1 & 5 & 8 & -7\\ 9 & 9 & -3 & -6\\ 5 & 0 & -10 & -5\\ 10 & 2 & -10 & -4\end{vmatrix} = 5\begin{vmatrix}5 & 8 & -7\\ 9 & -3 & -6\\ 2 & -10 & -4\end{vmatrix} - 10\begin{vmatrix}1 & 5 & -7\\ 9 & 9 & -6\\ 10 & 2 & -4\end{vmatrix} + 5\begin{vmatrix}1 & 5 & 8\\ 9 & 9 & -3\\ 10 & 2 & -10\end{vmatrix} = -2700$
- $M_{43} = \begin{vmatrix}-6 & 1 & 8 & -7\\ 3 & 9 & -3 & -6\\ 6 & 5 & -10 & -5\\ 9 & 10 & -10 & -4\end{vmatrix} = -720$
- $M_{44} = \begin{vmatrix}-6 & 1 & 5 & -7\\ 3 & 9 & 9 & -6\\ 6 & 5 & 0 & -5\\ 9 & 10 & 2 & -4\end{vmatrix} = 1125$
- $M_{45} = \begin{vmatrix}-6 & 1 & 5 & 8\\ 3 & 9 & 9 & -3\\ 6 & 5 & 0 & -10\\ 9 & 10 & 2 & -10\end{vmatrix} = 765$

Sustituyendo:

$$
\det = -4(-2700) + 1(-720) - 3(1125) + 7(765) = 10800 - 720 - 3375 + 5355 = 12060
$$

**Resultado:** $12060$

---

### Ejercicio 30

Elijo el **renglón 1** porque tiene un cero ($a_{14} = 0$). Signos: $(+, -, +, -, +)$.

$$
\det = -8\,M_{11} - (-9)\,M_{12} + 9\,M_{13} - 0 + 9\,M_{15}
$$

- $M_{11} = \begin{vmatrix}-9 & 4 & -1 & 7\\ -7 & -3 & 7 & -1\\ 9 & 5 & 7 & -4\\ -10 & 5 & -3 & 4\end{vmatrix} = -4611$
- $M_{12} = \begin{vmatrix}4 & 4 & -1 & 7\\ 4 & -3 & 7 & -1\\ 2 & 5 & 7 & -4\\ -9 & 5 & -3 & 4\end{vmatrix} = -4437$
- $M_{13} = \begin{vmatrix}4 & -9 & -1 & 7\\ 4 & -7 & 7 & -1\\ 2 & 9 & 7 & -4\\ -9 & -10 & -3 & 4\end{vmatrix} = -9657$
- $M_{15} = \begin{vmatrix}4 & -9 & 4 & -1\\ 4 & -7 & -3 & 7\\ 2 & 9 & 5 & 7\\ -9 & -10 & 5 & -3\end{vmatrix} = 12354$

$$
\det = -8(-4611) + 9(-4437) + 9(-9657) + 9(12354) = 36888 - 39933 - 86913 + 111186 = 21228
$$

**Resultado:** $21228$

---

### Ejercicio 31

Elijo el **renglón 4** porque tiene un cero ($a_{41} = 0$). Signos: $(-, +, -, +, -)$.

$$
\det = 0 + 3\,M_{42} - 5\,M_{43} + 2\,M_{44} - (-7)\,M_{45}
$$

- $M_{42} = \begin{vmatrix}3 & 7 & -8 & -10\\ -1 & 6 & 0 & -2\\ -1 & 2 & -9 & 2\\ -2 & 0 & 9 & 10\end{vmatrix} = -1810$
- $M_{43} = \begin{vmatrix}3 & 2 & -8 & -10\\ -1 & 6 & 0 & -2\\ -1 & 5 & -9 & 2\\ -2 & 8 & 9 & 10\end{vmatrix} = -2504$
- $M_{44} = \begin{vmatrix}3 & 2 & 7 & -10\\ -1 & 6 & 6 & -2\\ -1 & 5 & 2 & 2\\ -2 & 8 & 0 & 10\end{vmatrix} = -146$
- $M_{45} = \begin{vmatrix}3 & 2 & 7 & -8\\ -1 & 6 & 6 & 0\\ -1 & 5 & 2 & -9\\ -2 & 8 & 0 & 9\end{vmatrix} = -1723$

$$
\det = 3(-1810) - 5(-2504) + 2(-146) + 7(-1723) = -5430 + 12520 - 292 - 12061 = -5263
$$

**Resultado:** $-5263$

---

### Ejercicio 32

Elijo el **renglón 5** porque tiene un cero ($a_{54} = 0$). Signos: $(+, -, +, -, +)$.

$$
\det = -5\,M_{51} - 6\,M_{52} + 9\,M_{53} - 0 + 3\,M_{55}
$$

- $M_{51} = \begin{vmatrix}-8 & -4 & 6 & -4\\ -8 & 1 & -10 & 9\\ -7 & 7 & 8 & 8\\ 7 & 10 & 8 & 8\end{vmatrix} = 702$
- $M_{52} = \begin{vmatrix}-1 & -4 & 6 & -4\\ -1 & 1 & -10 & 9\\ 6 & 7 & 8 & 8\\ -9 & 10 & 8 & 8\end{vmatrix} = -1404$
- $M_{53} = \begin{vmatrix}-1 & -8 & 6 & -4\\ -1 & -8 & -10 & 9\\ 6 & -7 & 8 & 8\\ -9 & 7 & 8 & 8\end{vmatrix} = -1024$
- $M_{55} = \begin{vmatrix}-1 & -8 & -4 & 6\\ -1 & -8 & 1 & -10\\ 6 & -7 & 7 & 8\\ -9 & 7 & 10 & 8\end{vmatrix} = 1320$

$$
\det = -5(702) - 6(-1404) + 9(-1024) + 3(1320) = -3510 + 8424 - 9216 + 3960 = -342
$$

**Resultado:** $-342$

---

### Ejercicio 33

Ningún renglón o columna tiene ceros, así que elijo el **renglón 5** porque tiene números más chicos ($1, 8, -4, 2, 3$). Signos: $(+, -, +, -, +)$.

$$
\det = 1\,M_{51} - 8\,M_{52} + (-4)\,M_{53} - 2\,M_{54} + 3\,M_{55}
$$

- $M_{51} = \begin{vmatrix}-10 & -2 & 4 & 4\\ 4 & 9 & 2 & 2\\ -5 & -3 & 6 & -8\\ 10 & 6 & -3 & 4\end{vmatrix} = -3210$
- $M_{52} = \begin{vmatrix}10 & -2 & 4 & 4\\ 2 & 9 & 2 & 2\\ 2 & -3 & 6 & -8\\ 5 & 6 & -3 & 4\end{vmatrix} = -2862$
- $M_{53} = \begin{vmatrix}10 & -10 & 4 & 4\\ 2 & 4 & 2 & 2\\ 2 & -5 & 6 & -8\\ 5 & 10 & -3 & 4\end{vmatrix} = -2388$
- $M_{54} = \begin{vmatrix}10 & -10 & -2 & 4\\ 2 & 4 & 9 & 2\\ 2 & -5 & -3 & -8\\ 5 & 10 & 6 & 4\end{vmatrix} = -10935$
- $M_{55} = \begin{vmatrix}10 & -10 & -2 & 4\\ 2 & 4 & 9 & 2\\ 2 & -5 & -3 & 6\\ 5 & 10 & 6 & -3\end{vmatrix} = 9240$

$$
\det = 1(-3210) - 8(-2862) - 4(-2388) - 2(-10935) + 3(9240) = -3210 + 22896 + 9552 + 21870 + 27720 = 78828
$$


$$
\det = 78822
$$

**Resultado:** $78822$

---

### Ejercicio 34

Elijo el **renglón 1** porque tiene un cero ($a_{15} = 0$). Signos: $(+, -, +, -, +)$.

$$
\det = -8\,M_{11} - (-9)\,M_{12} + 10\,M_{13} - 8\,M_{14} + 0
$$

- $M_{11} = \begin{vmatrix}-9 & -2 & 0 & 10\\ -4 & -8 & -10 & 2\\ 8 & -6 & -6 & -6\\ -3 & 3 & -1 & -3\end{vmatrix} = -208$
- $M_{12} = \begin{vmatrix}-5 & -2 & 0 & 10\\ 3 & -8 & -10 & 2\\ 7 & -6 & -6 & -6\\ 7 & 3 & -1 & -3\end{vmatrix} = 1852$
- $M_{13} = \begin{vmatrix}-5 & -9 & 0 & 10\\ 3 & -4 & -10 & 2\\ 7 & 8 & -6 & -6\\ 7 & -3 & -1 & -3\end{vmatrix} = -2876$
- $M_{14} = \begin{vmatrix}-5 & -9 & -2 & 10\\ 3 & -4 & -8 & 2\\ 7 & 8 & -6 & -6\\ 7 & -3 & 3 & -3\end{vmatrix} = -4691$

$$
\det = -8(-208) + 9(1852) + 10(-2876) - 8(-4691) = 1664 + 16668 - 28760 + 37528 = 27100
$$

**Resultado:** $27100$