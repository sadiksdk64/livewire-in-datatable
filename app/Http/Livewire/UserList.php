<?php

namespace App\Http\Livewire;

use Livewire\Component;

class UserList extends Component
{
    public $user,$show = false;
    public $name,$mobile,$country,$pan,$email;

    public function mount($user)
    {
        $this->user = $user;
        $this->name = $this->user->name;
        $this->mobile = $this->user->mobile;
        $this->country = $this->user->country;
        $this->pan = $this->user->pan;
        $this->email = $this->user->email;
    }

    public function show()
    {
        $this->show = true;
    }
    
    public function update()
    {
        $this->user->name = $this->name;
        $this->user->mobile = $this->mobile;
        $this->user->country = $this->country;
        $this->user->pan = $this->pan;
        $this->user->email = $this->email;
        $this->show = false;
    }

    public function render()
    {
        return view('livewire.user-list');
    }
}
