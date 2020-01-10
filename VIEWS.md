# Dashboardv - done
    - Collapse załącza się na wszystkich elementach na raz - mają wspólny state - TODO!!!
    - '/'
      - statystyki dzisiejszych zamówień (zdalne, lokalne)
      - lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie - done

  -'/login'
    - pola na login i hasło
    - guzik logowania (link do dashboardu)

# Widok dostępności stolików

  - '/tables'
    - wybór daty i godziny - done
    - tabela z listą rezerwacji oraz wydarzeń
      - kolumna = 1 stolik
      - wiersz = blok 30min.
      - przypomina widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są stoliki
      - po kliknięciu rezerwacji lub eventu -> strona szczegółów

  - '/tables/booking/:id' - done
    - musi zawierać wszystkie informacje dot. rezerwacji
    - umożliwia edycję i zapisanie zmian

  - 'tables/booking/new' - done
    - jw. bez początkowych informacji

  - '/tables/events/:id'
    - musi zawierać wszystkie informacje dot. rezerwacji
    - umożliwia edycję i zapisanie zmian

  - 'tables/events/new' - done
    - jw. bez początkowych informacji

# Widok kelnera

  - '/waiter' - done
    - tabela
      - wiersze = stoliki
      - kolumny = info (status stolika, czas od aktywności)
      - ostatnia kolumna = dostępne akcje dla stolika

  - '/waiter/order/new' - done
    - numer stolika (edytowalny)
    - menu produktów
    - opcje wybranego produktu
    - zamówienie (zamówione produkty z opcjami i ceną)
    - kwota zamówienia

  - '/waiter/order/:id' - done
    - jw.

# Widok kuchni - done

  - '/kitchen'
    - lista zamowień w kolejności złożenia
    - lista zawiera
      - numer stolika lub zamówienia zdalnego,
      - pełne info dot. zamówionych dań
    - musi być możliwość oznaczenia zrealizowanego zamówienia
