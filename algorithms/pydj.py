import sys
def main():
    reader = (list(map(int, line.split())) for line in sys.stdin)
    n, maxWeight = next(reader)
    weights = list(reader)
    assert len(weights) == n

    pricePerUnitList = []
    for w in weights:
        pricePerUnit = w[0]/w[1]
        volume = w[1]
        pricePerUnitList.append([pricePerUnit, volume])

    pricePerUnitList = sorted(pricePerUnitList, key=lambda x: x[0], reverse=True)

    res = 0
    currentWeight = 0
    for ppu in pricePerUnitList:
        pricePerUnit = ppu[0]
        volume = ppu[1]
        while volume > 0 and currentWeight < maxWeight:
            res += pricePerUnit
            volume -= 1
            currentWeight += 1
   
    print ('%.3f' % res)



if __name__ == '__main__':
    main()