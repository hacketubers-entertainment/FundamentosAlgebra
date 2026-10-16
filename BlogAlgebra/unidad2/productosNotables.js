contenidoEntrada = `<!-- 1. Binomio al Cuadrado -->
        <section>
            <h2>1. Binomio al Cuadrado</h2>
            <div>
                <div>
                    <h3>Regla con mis propias palabras:</h3>
                    <p>El cuadrado de la suma o resta de dos términos es igual al cuadrado del primer término, más o menos el doble producto del primer término por el segundo, más el cuadrado del segundo término.</p>
                    <p>Fórmula general: (a &plusmn; b)² = a² &plusmn; 2ab + b²</p>
                </div>

                <div>
                    <h3>Ejemplo Resuelto Paso a Paso: (5x + 2)²</h3>
                    <ol>
                        <li>Cuadrado del primer término: (5x)² = 25x²</li>
                        <li>Doble del primero por el segundo: 2(5x)(2) = 20x</li>
                        <li>Cuadrado del segundo término: (2)² = 4</li>
                    </ol>
                    <p>Resultado final: 25x² + 20x + 4</p>
                </div>

                <div>
                    <h3>Comprobación con el método de la tabla (3x3):</h3>
                    <div>
                        <table id="tabla">
                            <tr>
                                <td>5x</td>
                                <td>10x</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>25x²</td>
                                <td>20x</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>5x</td>
                                <td>10x</td>
                                <td>2</td>
                            </tr>
                        </table>
                    </div>
                    <p>Simplificando la fila del centro: 25x² + 10x + 10x + 4 = 25x² + 20x + 4</p>
                </div>
            </div>
        </section>

        <!-- 2. Binomios Conjugados -->
        <section>
            <h2>2. Binomios Conjugados</h2>
            <div>
                <div>
                    <h3>Regla con mis propias palabras:</h3>
                    <p>El producto de la suma de dos términos por su diferencia da como resultado una diferencia de cuadrados: el cuadrado del primer término menos el cuadrado del segundo término.</p>
                    <p>Fórmula general: (a + b)(a - b) = a² - b²</p>
                </div>

                <div>
                    <h3>Ejemplo Resuelto Paso a Paso: (4x - 3)(4x + 3)</h3>
                    <ol>
                        <li>Cuadrado del primer término: (4x)² = 16x²</li>
                        <li>Cuadrado del segundo término: (3)² = 9</li>
                        <li>Se conectan con signo negativo (diferencia de cuadrados).</li>
                    </ol>
                    <p>Resultado final: 16x² - 9</p>
                </div>

                <div>
                    <h3>Comprobación con el método de la tabla (3x3):</h3>
                    <div>
                        <table id="tabla">
                            <tr>
                                <td>4x</td>
                                <td>12x</td>
                                <td>-3</td>
                            </tr>
                            <tr>
                                <td>16x²</td>
                                <td>0</td>
                                <td>-9</td>
                            </tr>
                            <tr>
                                <td>4x</td>
                                <td>-12x</td>
                                <td>3</td>
                            </tr>
                        </table>
                    </div>
                    <p>Los términos centrales se cancelan: 16x² + 12x - 12x - 9 = 16x² - 9</p>
                </div>
            </div>
        </section>

        <!-- 3. Binomios con Término Común -->
        <section>
            <h2>3. Binomios con Término Común</h2>
            <div>
                <div>
                    <h3>Regla con mis propias palabras:</h3>
                    <p>El producto de dos binomios que comparten un término idéntico consiste en el cuadrado del término común, más la suma algebraica de los dos términos no comunes multiplicada por el común, más el producto de los términos no comunes.</p>
                    <p>Fórmula general: (x + a)(x + b) = x² + (a + b)x + ab</p>
                </div>

                <div>
                    <h3>Ejemplo Resuelto Paso a Paso: (x + 6)(x + 2)</h3>
                    <ol>
                        <li>Cuadrado del término común: (x)² = x²</li>
                        <li>Suma de no comunes por el común: (6 + 2)x = 8x</li>
                        <li>Producto de los no comunes: (6)(2) = 12</li>
                    </ol>
                    <p>Resultado final: x² + 8x + 12</p>
                </div>

                <div>
                    <h3>Comprobación con el método de la tabla (3x3):</h3>
                    <div>
                        <table id="tabla">
                            <tr>
                                <td>x</td>
                                <td>2x</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>x²</td>
                                <td>8x</td>
                                <td>12</td>
                            </tr>
                            <tr>
                                <td>x</td>
                                <td>6x</td>
                                <td>2</td>
                            </tr>
                        </table>
                    </div>
                    <p>Agrupando términos semejantes en el centro: x² + 6x + 2x + 12 = x² + 8x + 12</p>
                </div>
            </div>
        </section>

        <!-- 4. Binomio al Cubo -->
        <section>
            <h2>4. Binomio al Cubo</h2>
            <div>
                <div>
                    <h3>Regla con mis propias palabras:</h3>
                    <p>El cubo de la suma o resta de dos términos se compone de cuatro partes: el cubo del primero, más o menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, y más o menos el cubo del segundo término.</p>
                    <p>Fórmula general: (a &plusmn; b)³ = a³ &plusmn; 3a²b + 3ab² &plusmn; b³</p>
                </div>

                <div>
                    <h3>Ejemplo Resuelto Paso a Paso: (x + 2)³</h3>
                    <ol>
                        <li>Cubo del primer término: (x)³ = x³</li>
                        <li>Triple del cuadrado del primero por el segundo: 3(x²)(2) = 6x²</li>
                        <li>Triple del primero por el cuadrado del segundo: 3(x)(2²) = 12x</li>
                        <li>Cubo del segundo término: (2)³ = 8</li>
                    </ol>
                    <p>Resultado final: x³ + 6x² + 12x + 8</p>
                </div>

                <div>
                    <h3>Comprobación con expansión sucesiva:</h3>
                    <p>Multiplicando el binomio al cuadrado por el binomio restante: (x² + 4x + 4)(x + 2) = x³ + 6x² + 12x + 8</p>
                </div>
            </div>
        </section>`;
