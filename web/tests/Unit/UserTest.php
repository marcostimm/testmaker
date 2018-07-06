<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Models\User;

class UserTest extends TestCase
{
    /** @test */
    public function LoadUser()
    {
        $user = User::find(1);

        $this->assertEquals($user->name,    "Marcos Timm");
        $this->assertEquals($user->id,      1);
    }
}
