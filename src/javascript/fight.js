export function fight(firstFighter, secondFighter) {
    console.log("First fighter: " + firstFighter.name + '\n' +
        "Second fighter: " + secondFighter.name);

    let winner;

    let firstFighterHealth = firstFighter.health;
    let secondFighterHealth = secondFighter.health;

    let attackRound = 1;

    while (firstFighterHealth && secondFighterHealth > 0) {
        console.log('Attack round: ' + attackRound + '\n' +
            firstFighter.name + ' attacked ' + secondFighter.name);

        secondFighterHealth -= getDamage(firstFighter, secondFighter);
        console.log(secondFighter.name + ' health = ' + secondFighterHealth);

        if (secondFighterHealth <= 0) {
            console.log(secondFighter.name + ' was killed!');
            winner = firstFighter;
            break;
        }

        console.log(secondFighter.name + ' counterattacked ' + firstFighter.name);

        firstFighterHealth -= getDamage(secondFighter, firstFighter);
        console.log(firstFighter.name + ' health = ' + firstFighterHealth);

        if (firstFighterHealth <= 0) {
            console.log(firstFighter.name + ' was killed!');
            winner = secondFighter;
            break;
        }

        attackRound++;
    }

    console.log("The winner is " + winner.name);

    return winner;
}

export function getDamage(attacker, enemy) {
    const damage = getHitPower(attacker) - getBlockPower(enemy);
    const damageResult = damage > 0 ? damage : 0;
    console.log('Resulted damage = ', damageResult);

    return damageResult;
}

export function getHitPower(fighter) {
    const criticalHitChance = Math.random() + 1;
    const hitPower = fighter.attack * criticalHitChance;
    console.log(fighter.name + ' hitPower = ', hitPower);

    return fighter.attack * criticalHitChance;
}

export function getBlockPower(fighter) {
    const dodgeChance = Math.random() + 1;
    const blockPower = fighter.defense * dodgeChance;
    console.log(fighter.name + ' blockPower = ', blockPower);

    return blockPower;
}
