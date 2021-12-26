#include <iostream>
#include <stdlib.h>
using namespace std;

int main()
{ 
            system("color F0");


    char palavra[30], letra[1], secreta[30];
    int tamanho, index, chances, pontos;
    bool acerto;

    chances = 6;
    tamanho = 0;
    index = 0;
    acerto = false;
    pontos = 0;

    cout << "Digite uma palavra secreta: ";
    cin >> palavra;
    system("cls"); // limpa o console

    while (palavra[index] != '\0')
    { // caractere do enter
        index++;
        tamanho++;
    }

    for (index = 0; index < 30; index++)
    { // visual no console
        secreta[index] = '-';
    }

    ////////// PLAY //////////

    while ((chances > 0) && (pontos < tamanho))
    {
        cout << "Chances : " << chances << "\n\n";
        cout << "Palavra secreta: ";
        for (index = 0; index < tamanho; index++)
        {
            cout << secreta[index];
        }
        cout << "\n\n Digite uma letra: ";
        cin >> letra[0];
        for (index = 0; index < tamanho; index++)
        {
            if (palavra[index] == letra[0])
            {
                acerto = true;
                secreta[index] = palavra[index];
                pontos++;
            }
        }
        if (!acerto)
        {
            chances--;
        }
        acerto = false;
        system("clear");
    }
    if (pontos == tamanho)
    {
        cout << "Você ganhou";
    }
    else
    {
        cout << "Que pena você perdeu! ";
    }

    system("pause");
    return 0;
}