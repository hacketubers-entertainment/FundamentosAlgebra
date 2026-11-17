# Actividad #26 — Ejercicios: Operaciones con matrices (1–12)

---

### Ejercicio 1

$$
\begin{bmatrix}-6\\ -2\\ -6\\ -3\end{bmatrix} - \begin{bmatrix}5\\ -4\\ -5\\ 6\end{bmatrix} + \begin{bmatrix}6\\ 2\\ 6\\ -3\end{bmatrix}
$$

**Procedimiento:**

$$
\begin{bmatrix}-6 - 5 + 6 \\ -2 - (-4) + 2 \\ -6 - (-5) + 6 \\ -3 - 6 + (-3)\end{bmatrix} = \begin{bmatrix}-5 \\ -2 + 4 + 2 \\ -6 + 5 + 6 \\ -12\end{bmatrix}
$$

**Resultado:**

$$
\begin{bmatrix}-5 \\ 4 \\ 5 \\ -12\end{bmatrix}
$$

---

### Ejercicio 2

$$
\begin{bmatrix}-1&3\\ -6&-1\end{bmatrix} - \left(\begin{bmatrix}4&5\\ 0&-6\end{bmatrix} - \begin{bmatrix}-3&-3\\ 6&-4\end{bmatrix}\right)
$$

**Procedimiento:**

1. Primero resolvemos la resta dentro del paréntesis:

$$
\begin{bmatrix}4 - (-3) & 5 - (-3) \\ 0 - 6 & -6 - (-4)\end{bmatrix} = \begin{bmatrix}7 & 8 \\ -6 & -2\end{bmatrix}
$$

2. Restamos el resultado a la primera matriz:

$$
\begin{bmatrix}-1 - 7 & 3 - 8 \\ -6 - (-6) & -1 - (-2)\end{bmatrix} = \begin{bmatrix}-8 & -5 \\ 0 & 1\end{bmatrix}
$$

**Resultado:**

$$
\begin{bmatrix}-8 & -5 \\ 0 & 1\end{bmatrix}
$$

---

### Ejercicio 3

$$
\begin{bmatrix}-4&6&-3&5\end{bmatrix} - \begin{bmatrix}-4&-5&-5&3\end{bmatrix} + \begin{bmatrix}4&4&5&-5\end{bmatrix}
$$

**Procedimiento:**

$$
\begin{bmatrix}-4 - (-4) + 4 & 6 - (-5) + 4 & -3 - (-5) + 5 & 5 - 3 + (-5)\end{bmatrix}
$$

$$
= \begin{bmatrix}-4 + 4 + 4 & 6 + 5 + 4 & -3 + 5 + 5 & 2 - 5\end{bmatrix}
$$

**Resultado:**

$$
\begin{bmatrix}4 & 15 & 7 & -3\end{bmatrix}
$$

---

### Ejercicio 4

$$
\begin{bmatrix}0&0\end{bmatrix} - \begin{bmatrix}5&4\end{bmatrix} + \begin{bmatrix}-4&-3\end{bmatrix}
$$

**Procedimiento:**

$$
\begin{bmatrix}0 - 5 + (-4) & 0 - 4 + (-3)\end{bmatrix}
$$

**Resultado:**

$$
\begin{bmatrix}-9 & -7\end{bmatrix}
$$

---

### Ejercicio 5

$$
-3 \cdot \left(-2\begin{bmatrix}-5&2&2&-5\end{bmatrix}\right)
$$

**Procedimiento:**

1. Paréntesis:

$$
-2\begin{bmatrix}-5&2&2&-5\end{bmatrix} = \begin{bmatrix}10 & -4 & -4 & 10\end{bmatrix}
$$

2. Escalar exterior:

$$
-3\begin{bmatrix}10 & -4 & -4 & 10\end{bmatrix} = \begin{bmatrix}-30 & 12 & 12 & -30\end{bmatrix}
$$

**Resultado:**

$$
\begin{bmatrix}-30 & 12 & 12 & -30\end{bmatrix}
$$

---

### Ejercicio 6

$$
5 \cdot \left(-4\begin{bmatrix}2&-2&0\end{bmatrix}\right)
$$

**Procedimiento:**

1. Paréntesis:

$$
-4\begin{bmatrix}2&-2&0\end{bmatrix} = \begin{bmatrix}-8 & 8 & 0\end{bmatrix}
$$

2. Escalar exterior:

$$
5\begin{bmatrix}-8 & 8 & 0\end{bmatrix} = \begin{bmatrix}-40 & 40 & 0\end{bmatrix}
$$

**Resultado:**

$$
\begin{bmatrix}-40 & 40 & 0\end{bmatrix}
$$

---

### Ejercicio 7

$$
5 \cdot \left(2\begin{bmatrix}-2&-4\\ -1&-5\end{bmatrix}\right)
$$

**Procedimiento:**

1. Paréntesis:

$$
2\begin{bmatrix}-2&-4\\ -1&-5\end{bmatrix} = \begin{bmatrix}-4 & -8\\ -2 & -10\end{bmatrix}
$$

2. Escalar exterior:

$$
5\begin{bmatrix}-4 & -8\\ -2 & -10\end{bmatrix} = \begin{bmatrix}-20 & -40\\ -10 & -50\end{bmatrix}
$$

**Resultado:**

$$
\begin{bmatrix}-20 & -40\\ -10 & -50\end{bmatrix}
$$

---

### Ejercicio 8

$$
-3 \cdot \left(3\begin{bmatrix}6\\ -1\end{bmatrix}\right)
$$

**Procedimiento:**

1. Paréntesis:

$$
3\begin{bmatrix}6\\ -1\end{bmatrix} = \begin{bmatrix}18\\ -3\end{bmatrix}
$$

2. Escalar exterior:

$$
-3\begin{bmatrix}18\\ -3\end{bmatrix} = \begin{bmatrix}-54\\ 9\end{bmatrix}
$$

**Resultado:**

$$
\begin{bmatrix}-54\\ 9\end{bmatrix}
$$

---

### Ejercicio 9

$$
\begin{bmatrix}0&5\\ 2&-4\end{bmatrix} \cdot \left(\begin{bmatrix}4&0\\ 2&1\end{bmatrix} \cdot \begin{bmatrix}-2&1&2&-3\\ 4&-2&3&2\end{bmatrix}\right)
$$

**Procedimiento:**

1. Calculamos el producto del paréntesis ($M$):

$$
M = \begin{bmatrix}4(-2)+0(4) & 4(1)+0(-2) & 4(2)+0(3) & 4(-3)+0(2) \\ 2(-2)+1(4) & 2(1)+1(-2) & 2(2)+1(3) & 2(-3)+1(2)\end{bmatrix} = \begin{bmatrix}-8 & 4 & 8 & -12 \\ 0 & 0 & 7 & -4\end{bmatrix}
$$

2. Multiplicamos por la primera matriz:

$$
\begin{bmatrix}0&5\\ 2&-4\end{bmatrix} \cdot \begin{bmatrix}-8 & 4 & 8 & -12 \\ 0 & 0 & 7 & -4\end{bmatrix} = \begin{bmatrix}0(-8)+5(0) & 0(4)+5(0) & 0(8)+5(7) & 0(-12)+5(-4) \\ 2(-8)+(-4)(0) & 2(4)+(-4)(0) & 2(8)+(-4)(7) & 2(-12)+(-4)(-4)\end{bmatrix}
$$

**Resultado:**

$$
\begin{bmatrix}0 & 0 & 35 & -20 \\ -16 & 8 & -12 & -8\end{bmatrix}
$$

---

### Ejercicio 10

$$
\begin{bmatrix}1&2\\ 3&-4\\ 2&-4\end{bmatrix} \cdot \left(\begin{bmatrix}4&2\\ 2&-5\end{bmatrix} \cdot \begin{bmatrix}-1&3\\ 1&2\end{bmatrix}\right)
$$

**Procedimiento:**

1. Calculamos el paréntesis ($M$):

$$
M = \begin{bmatrix}4(-1)+2(1) & 4(3)+2(2) \\ 2(-1)+(-5)(1) & 2(3)+(-5)(2)\end{bmatrix} = \begin{bmatrix}-2 & 16 \\ -7 & -4\end{bmatrix}
$$

2. Multiplicamos por la matriz de la izquierda:

$$
\begin{bmatrix}1&2\\ 3&-4\\ 2&-4\end{bmatrix} \cdot \begin{bmatrix}-2 & 16 \\ -7 & -4\end{bmatrix} = \begin{bmatrix}1(-2)+2(-7) & 1(16)+2(-4) \\ 3(-2)+(-4)(-7) & 3(16)+(-4)(-4) \\ 2(-2)+(-4)(-7) & 2(16)+(-4)(-4)\end{bmatrix} = \begin{bmatrix}-2-14 & 16-8 \\ -6+28 & 48+16 \\ -4+28 & 32+16\end{bmatrix}
$$

**Resultado:**

$$
\begin{bmatrix}-16 & 8 \\ 22 & 64 \\ 24 & 48\end{bmatrix}
$$

---

### Ejercicio 11

$$
\begin{bmatrix}5&-2&5&6\\ 1&-5&6&4\end{bmatrix} \cdot \left(\begin{bmatrix}3&1\\ 4&-1\\ -1&-3\\ -2&-1\end{bmatrix} \cdot \begin{bmatrix}0&1\\ -1&0\end{bmatrix}\right)
$$

**Procedimiento:**

1. Calculamos el paréntesis ($M$):

$$
M = \begin{bmatrix}3(0)+1(-1) & 3(1)+1(0) \\ 4(0)+(-1)(-1) & 4(1)+(-1)(0) \\ -1(0)+(-3)(-1) & -1(1)+(-3)(0) \\ -2(0)+(-1)(-1) & -2(1)+(-1)(0)\end{bmatrix} = \begin{bmatrix}-1 & 3 \\ 1 & 4 \\ 3 & -1 \\ 1 & -2\end{bmatrix}
$$

2. Multiplicamos por la primera matriz:

* $c_{11} = 5(-1) + (-2)(1) + 5(3) + 6(1) = -5 - 2 + 15 + 6 = 14$
* $c_{12} = 5(3) + (-2)(4) + 5(-1) + 6(-2) = 15 - 8 - 5 - 12 = -10$
* $c_{21} = 1(-1) + (-5)(1) + 6(3) + 4(1) = -1 - 5 + 18 + 4 = 16$
* $c_{22} = 1(3) + (-5)(4) + 6(-1) + 4(-2) = 3 - 20 - 6 - 8 = -31$

**Resultado:**

$$
\begin{bmatrix}14 & -10 \\ 16 & -31\end{bmatrix}
$$

---

### Ejercicio 12

$$
\begin{bmatrix}0&-4\\ 1&-4\\ -1&5\\ -3&4\end{bmatrix} \cdot \begin{bmatrix}-3&-1&-2&3\\ -1&-4&-3&5\end{bmatrix} \cdot \begin{bmatrix}4&0\\ 1&-5\\ 2&5\\ 2&1\end{bmatrix}
$$

**Procedimiento:**

1. Multiplicamos las dos primeras matrices:

$$
M = \begin{bmatrix}0(-3)-4(-1) & 0(-1)-4(-4) & 0(-2)-4(-3) & 0(3)-4(5) \\ 1(-3)-4(-1) & 1(-1)-4(-4) & 1(-2)-4(-3) & 1(3)-4(5) \\ -1(-3)+5(-1) & -1(-1)+5(-4) & -1(-2)+5(-3) & -1(3)+5(5) \\ -3(-3)+4(-1) & -3(-1)+4(-4) & -3(-2)+4(-3) & -3(3)+4(5)\end{bmatrix} = \begin{bmatrix}4 & 16 & 12 & -20 \\ 1 & 15 & 10 & -17 \\ -2 & -19 & -13 & 22 \\ 5 & -13 & -6 & 11\end{bmatrix}
$$

2. Multiplicamos $M$ por la tercera matriz:

* **Renglón 1:**
  * $c_{11} = 4(4) + 16(1) + 12(2) + (-20)(2) = 16 + 16 + 24 - 40 = 16$
  * $c_{12} = 4(0) + 16(-5) + 12(5) + (-20)(1) = 0 - 80 + 60 - 20 = -40$
* **Renglón 2:**
  * $c_{21} = 1(4) + 15(1) + 10(2) + (-17)(2) = 4 + 15 + 20 - 34 = 5$
  * $c_{22} = 1(0) + 15(-5) + 10(5) + (-17)(1) = 0 - 75 + 50 - 17 = -42$
* **Renglón 3:**
  * $c_{31} = (-2)(4) + (-19)(1) + (-13)(2) + 22(2) = -8 - 19 - 26 + 44 = -9$
  * $c_{32} = (-2)(0) + (-19)(-5) + (-13)(5) + 22(1) = 0 + 95 - 65 + 22 = 52$
* **Renglón 4:**
  * $c_{41} = 5(4) + (-13)(1) + (-6)(2) + 11(2) = 20 - 13 - 12 + 22 = 17$
  * $c_{42} = 5(0) + (-13)(-5) + (-6)(5) + 11(1) = 0 + 65 - 30 + 11 = 46$

**Resultado:**

$$
\begin{bmatrix}16 & -40 \\ 5 & -42 \\ -9 & 52 \\ 17 & 46\end{bmatrix}
$$