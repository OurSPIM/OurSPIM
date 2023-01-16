#[cfg(test)]
mod parser_main_function_tests {
    use crate::parser::parser_instruction_tokenization::instruction_tokenization::print_instruction_struct_contents;
    use crate::parser::parser_main::*;

    #[test]
    fn parser_takes_string_and_returns_vec_of_instructions() {
        let results =
            parser("lw $t1, 512($t1)\nadd $t1, $s6, $t2\naddi $t1, $t2, 43690".to_string());

        let length = results.len();

        for i in 0..length {
            print_instruction_struct_contents(&results.get(i).unwrap());
        }
        assert_eq!(results[0].binary, 0b10001101001010010000001000000000);
        assert_eq!(results[1].binary, 0b00000010110010100100100000100000);
        assert_eq!(results[2].binary, 0b00100001010010011010101010101010);
    }
}

mod read_instruction_tests {
    use crate::parser::parser_instruction_tokenization::instruction_tokenization::{
        print_instruction_struct_contents, Instruction,
    };
    use crate::parser::parser_main::*;

    #[test]
    fn read_instruction_add() {
        let mut instruction = Instruction {
            tokens: vec![
                "add".to_string(),
                "$t1".to_string(),
                "$s6".to_string(),
                "$t2".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        print_instruction_struct_contents(&instruction);
        assert_eq!(instruction.binary, 0b00000010110010100100100000100000);
    }

    #[test]
    fn read_instruction_sub() {
        let mut instruction = Instruction {
            tokens: vec![
                "sub".to_string(),
                "$t1".to_string(),
                "$s6".to_string(),
                "$t2".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b00000010110010100100100000100010);
    }

    #[test]
    fn read_instruction_mul() {
        let mut instruction = Instruction {
            tokens: vec![
                "mul".to_string(),
                "$t1".to_string(),
                "$s6".to_string(),
                "$t2".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b01110010110010100100100000000010);
    }

    #[test]
    fn read_instruction_div() {
        let mut instruction = Instruction {
            tokens: vec!["div".to_string(), "$t1".to_string(), "$s6".to_string()],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b00000001001101100000000000011010);
    }

    #[test]
    fn read_instruction_lw() {
        let mut instruction = Instruction {
            tokens: vec!["lw".to_string(), "$t1".to_string(), "512($t1)".to_string()],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b10001101001010010000001000000000);
    }

    #[test]
    fn read_instruction_sw() {
        let mut instruction = Instruction {
            tokens: vec!["sw".to_string(), "$t1".to_string(), "512($t1)".to_string()],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b10101101001010010000001000000000);
    }

    #[test]
    fn read_instruction_lui() {
        let mut instruction = Instruction {
            tokens: vec!["lui".to_string(), "$t1".to_string(), "43690".to_string()],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b00111100000010011010101010101010);
    }

    #[test]
    fn read_instruction_addi() {
        let mut instruction = Instruction {
            tokens: vec![
                "addi".to_string(),
                "$t1".to_string(),
                "$t2".to_string(),
                "43690".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b00100001010010011010101010101010);
    }

    #[test]
    fn read_instruction_and() {
        let mut instruction = Instruction {
            tokens: vec![
                "and".to_string(),
                "$t1".to_string(),
                "$s6".to_string(),
                "$t2".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        print_instruction_struct_contents(&instruction);
        assert_eq!(instruction.binary, 0b00000010110010100100100000100100);
    }

    #[test]
    fn read_instruction_or() {
        let mut instruction = Instruction {
            tokens: vec![
                "or".to_string(),
                "$t1".to_string(),
                "$s6".to_string(),
                "$t2".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b00000010110010100100100000100101);
    }

    #[test]
    fn read_instruction_ori() {
        let mut instruction = Instruction {
            tokens: vec![
                "ori".to_string(),
                "$t1".to_string(),
                "$t2".to_string(),
                "43690".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b00110101010010011010101010101010);
    }

    #[test]
    fn read_instruction_andi() {
        let mut instruction = Instruction {
            tokens: vec![
                "andi".to_string(),
                "$t1".to_string(),
                "$t2".to_string(),
                "43690".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b00110001010010011010101010101010);
    }

    #[test]
    fn read_instruction_dadd() {
        let mut instruction = Instruction {
            tokens: vec![
                "dadd".to_string(),
                "$t1".to_string(),
                "$t2".to_string(),
                "$s6".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b00000001010101100100100000101100);
    }

    #[test]
    fn read_instruction_dsub() {
        let mut instruction = Instruction {
            tokens: vec![
                "dsub".to_string(),
                "$t1".to_string(),
                "$t2".to_string(),
                "$s6".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b00000001010101100100100000101110);
    }

    #[test]
    fn read_instruction_dmul() {
        let mut instruction = Instruction {
            tokens: vec![
                "dmul".to_string(),
                "$t1".to_string(),
                "$t2".to_string(),
                "$s6".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b00000001010101100100100010011100);
    }

    #[test]
    fn read_instruction_ddiv() {
        let mut instruction = Instruction {
            tokens: vec!["ddiv".to_string(), "$t1".to_string(), "$t2".to_string()],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b00000001001010100000000000011110);
    }

    #[test]
    fn read_instruction_add_s() {
        let mut instruction = Instruction {
            tokens: vec![
                "add.s".to_string(),
                "$f9".to_string(),
                "$f10".to_string(),
                "$f22".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);

        assert_eq!(instruction.binary, 0b01000110000101100101001001000000);
    }

    #[test]
    fn read_instruction_add_d() {
        let mut instruction = Instruction {
            tokens: vec![
                "add.d".to_string(),
                "$f9".to_string(),
                "$f10".to_string(),
                "$f22".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        print_instruction_struct_contents(&instruction);
        assert_eq!(instruction.binary, 0b01000110001101100101001001000000);
    }

    #[test]
    fn read_instruction_sub_s() {
        let mut instruction = Instruction {
            tokens: vec![
                "sub.s".to_string(),
                "$f9".to_string(),
                "$f10".to_string(),
                "$f22".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b01000110000101100101001001000001);
    }

    #[test]
    fn read_instruction_sub_d() {
        let mut instruction = Instruction {
            tokens: vec![
                "sub.d".to_string(),
                "$f9".to_string(),
                "$f10".to_string(),
                "$f22".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b01000110001101100101001001000001);
    }

    #[test]
    fn read_instruction_mul_s() {
        let mut instruction = Instruction {
            tokens: vec![
                "mul.s".to_string(),
                "$f9".to_string(),
                "$f10".to_string(),
                "$f22".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b01000110000101100101001001000010);
    }

    #[test]
    fn read_instruction_mul_d() {
        let mut instruction = Instruction {
            tokens: vec![
                "mul.d".to_string(),
                "$f9".to_string(),
                "$f10".to_string(),
                "$f22".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b01000110001101100101001001000010);
    }

    #[test]
    fn read_instruction_div_s() {
        let mut instruction = Instruction {
            tokens: vec![
                "div.s".to_string(),
                "$f9".to_string(),
                "$f10".to_string(),
                "$f22".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b01000110000101100101001001000011);
    }

    #[test]
    fn read_instruction_div_d() {
        let mut instruction = Instruction {
            tokens: vec![
                "div.d".to_string(),
                "$f9".to_string(),
                "$f10".to_string(),
                "$f22".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b01000110001101100101001001000011);
    }

    #[test]
    fn read_instruction_dahi() {
        let mut instruction = Instruction {
            tokens: vec!["dahi".to_string(), "$t1".to_string(), "43690".to_string()],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        print_instruction_struct_contents(&instruction);
        assert_eq!(instruction.binary, 0b00000101001001101010101010101010);
    }

    #[test]
    fn read_instruction_dati() {
        let mut instruction = Instruction {
            tokens: vec!["dati".to_string(), "$t1".to_string(), "43690".to_string()],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b00000101001111101010101010101010);
    }

    #[test]
    fn read_instruction_daddiu() {
        let mut instruction = Instruction {
            tokens: vec![
                "daddiu".to_string(),
                "$t1".to_string(),
                "$t2".to_string(),
                "43690".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b01100101010010011010101010101010);
    }

    #[test]
    fn read_instruction_slt() {
        let mut instruction = Instruction {
            tokens: vec![
                "slt".to_string(),
                "$t1".to_string(),
                "$t2".to_string(),
                "$s6".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b00000001010101100100100000101010);
    }

    #[test]
    fn read_instruction_sltu() {
        let mut instruction = Instruction {
            tokens: vec![
                "sltu".to_string(),
                "$t1".to_string(),
                "$t2".to_string(),
                "$s6".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b00000001010101100100100000101011);
    }

    #[test]
    fn read_instruction_swc1() {
        let mut instruction = Instruction {
            tokens: vec![
                "swc1".to_string(),
                "$f9".to_string(),
                "43690($t2)".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b11100101010010011010101010101010);
    }

    #[test]
    fn read_instruction_lwc1() {
        let mut instruction = Instruction {
            tokens: vec![
                "lwc1".to_string(),
                "$f9".to_string(),
                "43690($t2)".to_string(),
            ],
            ..Default::default()
        };
        instruction = read_instruction(instruction);
        assert_eq!(instruction.binary, 0b11000101010010011010101010101010);
    }
}
use crate::parser::parser_main::place_binary_in_middle_of_another;
#[test]
fn place_binary_in_middle_of_another_works() {
    let result = place_binary_in_middle_of_another(0b11, 0b0, 1, 0);
    assert_eq!(result, 0b101);
}
#[test]
fn place_binary_in_middle_of_another_works_2() {
    let result = place_binary_in_middle_of_another(0b1001, 0b111, 3, 1);
    assert_eq!(result, 0b1011101);
}
#[test]
fn place_binary_in_middle_of_another_works_3() {
    let result = place_binary_in_middle_of_another(0b10100101, 0b11011, 5, 3);
    assert_eq!(result, 0b1010110110101);
}

#[test]
fn place_binary_works_dahi() {
    let result = place_binary_in_middle_of_another(0b000001010011010101010101010, 0b00110, 5, 15);
    assert_eq!(result, 0b00000101001001101010101010101010);
}