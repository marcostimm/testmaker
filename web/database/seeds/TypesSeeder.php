<?php

use App\Models\Type;
use Illuminate\Database\Seeder;

class TypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [[
            'name'          => 'Discursiva',
            'slug'          => 'discursive',
            'description'   => 'Questão com linhas para preenchimento da resposta'
        ],[
            'name'          => 'Múltipla Escolha',
            'slug'          => 'multiple-choice',
            'description'   => 'Questão com respostas para serem escolhidas'
        ]];

        Type::insert($data);
        
    }
}
