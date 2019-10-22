const { longestPalindrome, findMaxPalindrome } = require("./longestPalindrome");

test("longestPalindrome", () => {
  expect(longestPalindrome("babad")).toBe("bab");
  expect(longestPalindrome("cbbd")).toBe("bb");
  expect(longestPalindrome("palimememsadi")).toBe("memem");
  expect(longestPalindrome("ac")).toBe("a");
  expect(
    longestPalindrome(
      "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
    )
  ).toBe("ranynar");
  //   expect(findMaxPalindrome("babad", 1, "odd")).toBe("bab");
  //   expect(findMaxPalindrome("babad", 0, "odd")).toBe("b");
  //   expect(findMaxPalindrome("babbad", 3, "even")).toBe("abba");
  //   expect(findMaxPalindrome("abcdcba", 3, "odd")).toBe("abcdcba");
});
