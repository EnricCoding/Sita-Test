export class LicensePlateGenerator {
    private static readonly DIGIT_BASE = 10; // Base para números (0-9)
    private static readonly LETTER_BASE = 26; // Base para letras (A-Z)
    private static readonly PLATE_LENGTH = 6; // Longitud total de la placa
  
    /**
     * Obtiene la placa de licencia correspondiente al índice `n`.
     * @param n - Índice de la placa en la secuencia.
     * @returns La placa generada.
     */
    
    public static getPlateByIndex(n: number): string {
      if (n < 0) throw new Error("El índice no puede ser negativo.");
  
      const numericLimit = this.DIGIT_BASE ** 6; // 10^6 = 1000000
  
      if (n < numericLimit) {
        return this.formatPlate(n, 0);
      }
  
      // Ajustar `n` para que comience desde la sección de letras
      n -= numericLimit;
  
      const numericPart = n % numericLimit; // Parte numérica
      const letterPart = Math.floor(n / numericLimit); // Parte alfabética
  
      return this.formatPlate(numericPart, letterPart);
    }
  
    /**
     * Formatea el número de placa combinando la parte numérica y la parte alfabética.
     * @param numericPart - Parte numérica (0-999999).
     * @param letterPart - Parte de letras (0-ZZZZZZ).
     * @returns Número de placa formateado.
     */
    private static formatPlate(numericPart: number, letterPart: number): string {
      const numericStr = numericPart.toString().padStart(6, "0");
  
      let letters = "";
      let tempLetterPart = letterPart;
      while (tempLetterPart > 0) {
        letters = String.fromCharCode((tempLetterPart - 1) % this.LETTER_BASE + 65) + letters;
        tempLetterPart = Math.floor((tempLetterPart - 1) / this.LETTER_BASE);
      }
  
      return numericStr.slice(letters.length) + letters.padStart(6 - numericStr.length, "A");
    }
  }
  