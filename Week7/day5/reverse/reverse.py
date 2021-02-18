num = int(input("Enter an int:"))
while num > 4294967296 or num < 0:
    num = int(input("Enter an int:"))

bits = "{0:b}".format(num).zfill(32)
bits = bits[::-1]

print(bits, int(bits,2))