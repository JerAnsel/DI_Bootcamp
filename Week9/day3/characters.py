from inspect import signature

class Character():
    def __init__(self, name, life=100, attack=10):
        self.name = name
        self.life = life
        self.attack = attack

    def base_attack(self, enemy):
        enemy.life -= self.attack

class Druid(Character):
    def meditate(self):
        self.life += 10
        self.attack -= 2

    def animal_help(self):
        self.attack += 5
    
    def fight(self, enemy):
        enemy.life -= (self.life*0.75 + self.attack*0.75)

class Warrior(Character):
    def brawl(self, enemy):
        self.life -= 0.5*self.attack
        enemy.life -= 1.25*self.attack # set enemy damage to 1.25 attack, since 2*attack automatically wins the fight.

    def train(self):
        self.attack += 2
        self.life += 2

    def roar(self, enemy):
        enemy.attack -= 3

class Mage(Character):
    def curse(self, enemy):
        enemy.attack -= 2

    def summon(self):
        self.attack += 3

    def cast_spell(self, enemy):
        enemy.life -= int(self.life/self.attack)

def valid_character(character):
    if character == 'Druid' or character == 'Mage' or character == 'Warrior':
        return True

    return False

def valid_attack(attack, character):
    if hasattr(character, attack):
        return True
    return False
    


if __name__ == '__main__':
    char1 = input('Player 1, choose your character:')
    while(not valid_character(char1)):
        print('Invalid character.')
        char1 = input('Player 1, choose your character:')
    char2 = input('Player 2, choose your character:')
    while(not valid_character(char2)):
        print('Invalid character.')
        char2 = input('Player 2, choose your character:')

    char1 = eval(char1 + '(\'Player1\')')
    char2 = eval(char2 + '(\'Player2\')')

    while(char1.life > 0 and char2.life > 0):
        attack1 = input('Player 1, choose your attack:')
        while(not valid_attack(attack1, char1)):
            print('Invalid attack.')
            attack1 = input('Player 1, choose your attack:')
        sig = signature(eval('char1.' + attack1)).parameters
        args = len(sig)
        if args > 0:
            eval('char1.' + attack1 + '(char2)')
        else:
             eval('char1.' + attack1 + '()')
        print(f'Player 2 has {char2.life} life left.')
        if char2.life < 0:
            print('Player 1 wins!')
            break
        attack2 = input('Player 2, choose your attack:')
        while(not valid_attack(attack2, char2)):
            print('Invalid attack.')
            attack2 = input('Player 2, choose your attack:')
        sig = signature(eval('char2.' + attack2)).parameters
        args = len(sig)
        if args > 0:
            eval('char2.' + attack2 + '(char1)')
        else:
             eval('char2.' + attack2 + '()')
        print(f'Player 1 has {char1.life} life left.')
        if char1.life < 0:
            print('Player 2 wins!')
            break
       
