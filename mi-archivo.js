public class HolaMundo {

    public static void main(String[] args) {
        System.out.println("¡Hola, mundo desde Java!");
        saludar("Jorge desde main");
        saludar("Jorge desde la rama conflicto");
        sumar(10, 7);
 }

    public static void saludar(String nombre) {
        System.out.println("Hola, " + nombre + ". ¡Bienvenida al ejercicio de Git y GitHub!");
 }

<<<<<<< HEAD
    public static void sumar(int a, int b) {
        int resultado = a + b;
        System.out.println("La suma de " + a + " + " + b + " es: " + resultado);
    }

        public static void restar(int a, int b) {
            int resultado = a - b;
            System.out.println("La resta de " + a + " - " + b + " es: " + resultado);
    }
}
=======
}
>>>>>>> 9ca2253624aadd8f95eb3c645c895f6787e19121
