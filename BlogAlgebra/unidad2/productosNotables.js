contenidoEntrada = `<!-- 1. Binomio al Cuadrado -->
        <section class="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-200">
            <h2 class="text-2xl font-bold text-indigo-600 mb-4">1. Binomio al Cuadrado</h2>
            <div class="space-y-4">
                <div>
                    <h3 class="font-semibold text-slate-700">Regla con mis propias palabras:</h3>
                    <p class="text-slate-600 mt-1">El cuadrado de la suma o resta de dos términos es igual al cuadrado del primer término, más o menos el doble producto del primer término por el segundo, más el cuadrado del segundo término.</p>
                    <p class="mt-2 font-medium text-slate-700">Fórmula general: (a &plusmn; b)² = a² &plusmn; 2ab + b²</p>
                </div>

                <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h3 class="font-semibold text-slate-700">Ejemplo Resuelto Paso a Paso: (5x + 2)²</h3>
                    <ol class="list-decimal list-inside space-y-1 text-slate-600 mt-2">
                        <li>Cuadrado del primer término: (5x)² = 25x²</li>
                        <li>Doble del primero por el segundo: 2(5x)(2) = 20x</li>
                        <li>Cuadrado del segundo término: (2)² = 4</li>
                    </ol>
                    <p class="mt-3 font-medium text-indigo-700">Resultado final: 25x² + 20x + 4</p>
                </div>

                <div>
                    <h3 class="font-semibold text-slate-700 mb-2">Comprobación con el método de la tabla (3x3):</h3>
                    <div class="overflow-x-auto">
                        <table id="tabla">
                            <tr>
                                <td class="border p-2 bg-slate-100 font-bold">5x</td>
                                <td class="border p-2 text-blue-600 font-semibold">10x</td>
                                <td class="border p-2 bg-slate-100 font-bold">2</td>
                            </tr>
                            <tr>
                                <td class="border p-2 bg-slate-100 font-bold">25x²</td>
                                <td class="border p-2 text-red-600 font-bold">20x</td>
                                <td class="border p-2 bg-slate-100 font-bold">4</td>
                            </tr>
                            <tr>
                                <td class="border p-2 bg-slate-100 font-bold">5x</td>
                                <td class="border p-2 text-blue-600 font-semibold">10x</td>
                                <td class="border p-2 bg-slate-100 font-bold">2</td>
                            </tr>
                        </table>
                    </div>
                    <p class="text-sm text-slate-500 text-center mt-2">Simplificando la fila del centro: 25x² + 10x + 10x + 4 = 25x² + 20x + 4</p>
                </div>
            </div>
        </section>

        <!-- 2. Binomios Conjugados -->
        <section class="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-200">
            <h2 class="text-2xl font-bold text-indigo-600 mb-4">2. Binomios Conjugados</h2>
            <div class="space-y-4">
                <div>
                    <h3 class="font-semibold text-slate-700">Regla con mis propias palabras:</h3>
                    <p class="text-slate-600 mt-1">El producto de la suma de dos términos por su diferencia da como resultado una diferencia de cuadrados: el cuadrado del primer término menos el cuadrado del segundo término.</p>
                    <p class="mt-2 font-medium text-slate-700">Fórmula general: (a + b)(a - b) = a² - b²</p>
                </div>

                <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h3 class="font-semibold text-slate-700">Ejemplo Resuelto Paso a Paso: (4x - 3)(4x + 3)</h3>
                    <ol class="list-decimal list-inside space-y-1 text-slate-600 mt-2">
                        <li>Cuadrado del primer término: (4x)² = 16x²</li>
                        <li>Cuadrado del segundo término: (3)² = 9</li>
                        <li>Se conectan con signo negativo (diferencia de cuadrados).</li>
                    </ol>
                    <p class="mt-3 font-medium text-indigo-700">Resultado final: 16x² - 9</p>
                </div>

                <div>
                    <h3 class="font-semibold text-slate-700 mb-2">Comprobación con el método de la tabla (3x3):</h3>
                    <div class="overflow-x-auto">
                        <table id="tabla">
                            <tr>
                                <td class="border p-2 bg-slate-100 font-bold">4x</td>
                                <td class="border p-2 text-blue-600 font-semibold">12x</td>
                                <td class="border p-2 bg-slate-100 font-bold">-3</td>
                            </tr>
                            <tr>
                                <td class="border p-2 bg-slate-100 font-bold">16x²</td>
                                <td class="border p-2 text-red-600 font-bold">0</td>
                                <td class="border p-2 bg-slate-100 font-bold">-9</td>
                            </tr>
                            <tr>
                                <td class="border p-2 bg-slate-100 font-bold">4x</td>
                                <td class="border p-2 text-blue-600 font-semibold">-12x</td>
                                <td class="border p-2 bg-slate-100 font-bold">3</td>
                            </tr>
                        </table>
                    </div>
                    <p class="text-sm text-slate-500 text-center mt-2">Los términos centrales se cancelan: 16x² + 12x - 12x - 9 = 16x² - 9</p>
                </div>
            </div>
        </section>

        <!-- 3. Binomios con Término Común -->
        <section class="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-200">
            <h2 class="text-2xl font-bold text-indigo-600 mb-4">3. Binomios con Término Común</h2>
            <div class="space-y-4">
                <div>
                    <h3 class="font-semibold text-slate-700">Regla con mis propias palabras:</h3>
                    <p class="text-slate-600 mt-1">El producto de dos binomios que comparten un término idéntico consiste en el cuadrado del término común, más la suma algebraica de los dos términos no comunes multiplicada por el común, más el producto de los términos no comunes.</p>
                    <p class="mt-2 font-medium text-slate-700">Fórmula general: (x + a)(x + b) = x² + (a + b)x + ab</p>
                </div>

                <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h3 class="font-semibold text-slate-700">Ejemplo Resuelto Paso a Paso: (x + 6)(x + 2)</h3>
                    <ol class="list-decimal list-inside space-y-1 text-slate-600 mt-2">
                        <li>Cuadrado del término común: (x)² = x²</li>
                        <li>Suma de no comunes por el común: (6 + 2)x = 8x</li>
                        <li>Producto de los no comunes: (6)(2) = 12</li>
                    </ol>
                    <p class="mt-3 font-medium text-indigo-700">Resultado final: x² + 8x + 12</p>
                </div>

                <div>
                    <h3 class="font-semibold text-slate-700 mb-2">Comprobación con el método de la tabla (3x3):</h3>
                    <div class="overflow-x-auto">
                        <table id="tabla">
                            <tr>
                                <td class="border p-2 bg-slate-100 font-bold">x</td>
                                <td class="border p-2 text-blue-600 font-semibold">2x</td>
                                <td class="border p-2 bg-slate-100 font-bold">6</td>
                            </tr>
                            <tr>
                                <td class="border p-2 bg-slate-100 font-bold">x²</td>
                                <td class="border p-`;
