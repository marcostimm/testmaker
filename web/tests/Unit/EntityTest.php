<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Http\Controllers\EntityController;

class EntityTest extends TestCase
{

    private $entity;

    public function setUp()
    {
        parent::setup();

        $this->entity = new EntityController();
    }

    /** @test */
    public function LoadEntitiesPaginated()
    {
        $entities = $this->entity->index();
        $data = json_decode($entities);

        $this->assertEquals($entities->original['current_page'], 1);
    }

    /** @test */
    public function HaveEntity()
    {
        $entities = $this->entity->index();
        $data = json_decode($entities);

        $this->assertArrayHasKey('id', $entities->original['data'][0]);
    }

}
