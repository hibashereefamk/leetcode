class Solution(object):
    def letterCombinations(self, digits):
        if not digits:
            return []

        digits_value = {
            "2": ["a", "b", "c"],
            "3": ["d", "e", "f"],
            "4": ["g", "h", "i"],
            "5": ["j", "k", "l"],
            "6": ["m", "n", "o"],
            "7": ["p", "q", "r", "s"],
            "8": ["t", "u", "v"],
            "9": ["w", "x", "y", "z"],
        }

        result = []

        def backtrack(index, current):
            # Base case
            if index == len(digits):
                result.append(current)
                return

            letters = digits_value[digits[index]]

            for letter in letters:
                backtrack(index + 1, current + letter)

        backtrack(0, "")
        return result
