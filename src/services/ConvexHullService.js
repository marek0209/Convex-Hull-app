 
// Aby znaleźć orientację trójki uporządkowanej (p, q, r).
    // Funkcja zwraca następujące wartości
    // 0 --> p, q i r są współliniowe
    // 1 --> Zgodnie z ruchem wskazówek zegara
    // 2 --> przeciwnie do ruchu wskazówek zegara
function orientation(p, q, r)
{
    let val = (q.pointY - p.pointY) * (r.pointX - q.pointX) -
                  (q.pointX - p.pointX) * (r.pointY - q.pointY);
        
        if (val === 0) return 0;  // sprawdzanie czy punkty są współliniowe
        return (val > 0)? 1: 2; // zgodnie z zegarem lub przeciwnie do zegara
}
 
// Funkcja obliczająca otoczkę wypukłą dla n punktów
export function convexHullService(points, n)
{
    // Muszą być co najmniej 3 punkty
        if (n < 3) return;
        
        // Incjalizacja tablicy przechowywują
        let hull = [];
        
        // Znajdowanie najbardziej wysuniętego na lewo punktu
        let l = 0;
        for (let i = 1; i < n; i++)
            if (points[i].pointX < points[l].pointX)
                l = i;
        
        // Zacznij od punktu najbardziej wysuniętego w lewo i przesuwaj się dalej
        // w kierunku przeciwnym do ruchu wskazówek zegara, aż do osiągnięcia punktu początkowego
        // ponownie. Pętla ta jest uruchamiana O(h) razy, gdzie h to
        // liczba punktów w wyniku lub danych wyjściowych.
        let p = l, q;
        do
        {
         
            // Dodaj bieżący punkt do wyniku
            hull.push(points[p]);
        
            // Szukamy punktu 'q' takiego, że
            // orientacja(p, q, x) jest przeciwna do ruchu wskazówek zegara
            // dla wszystkich punktów 'x'. Chodzi o to, by zachować
            // śledzenie ostatnio odwiedzonego, najbardziej przeciwnego do ruchu wskazówek zegara punktu w q.
            // Jeśli dowolny punkt 'i' jest bardziej
            // przeciwnie do ruchu wskazówek zegara niż q, to zaktualizuj q.
            q = (p + 1) % n;
               
            for (let i = 0; i < n; i++)
            {
               // Jeśli i jest bardziej przeciwne do ruchu wskazówek zegara niż
               // bieżące q, to zaktualizuj q
               if (orientation(points[p], points[i], points[q])=== 2)
                   q = i;
            }
        
            // Teraz q jest najbardziej przeciwny do ruchu wskazówek zegara względem p.
            // względem p. Ustaw p jako q dla następnej iteracji,
            // tak aby q zostało dodane do wyniku "kadłuba".
            p = q;
        
        } while (p !== l);  // Dopóki nie dojdziemy do pierwszego punktu
        
    return hull;

}
 
