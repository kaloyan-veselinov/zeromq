# Démarage du TD

## Q1 
Modèles de communication basiques sur socket TCP:
- Point-à-point (client-serveur) 
- multicast (limité aux opérateurs, compliqué en multi-opérateurs, dépendant des opérateurs, donc Netflix pas multicast; seuls à maîtriser le multicast sont des opérateurs, cf box TV) 
- broadcast (limité au sous-réseau)

## Q2 
Asyncrone -> on peut pas distinguer machine en panne et délai réseau

# Premier domaine: le request/reply

## Q5 
Ne marche pas après avoir relancé 

On utilise le domaine request/reply, mais on reply jamais -> tant qu'il n'y a pas de réponse, on ne peut pas progresser avec une autre requête

La programmation socket est asymétrique -> il faut lancer le serveur avant le client. Ici, pas de problèmes -> on attend le serveur si client lancé en premier.

# Autres domaines de communication

## Pull/Push

# Q7

